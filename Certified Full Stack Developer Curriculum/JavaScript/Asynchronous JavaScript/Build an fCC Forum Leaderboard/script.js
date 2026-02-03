const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);

  const diffMs = now - past;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}


function viewCount(postViews) {
  return postViews >= 1000 ? `${Math.floor(postViews / 1000)}k` : postViews;
}

function forumCategory(categoryId) {
  if (Object.hasOwn(allCategories, categoryId)) {
    return `<a class="category ${allCategories[categoryId].className}" href="${forumCategoryUrl}${allCategories[categoryId].className}/${categoryId}">${allCategories[categoryId].category}</a>`;
  }
  else {
    return `<a class="category general" href="${forumCategoryUrl}general/${categoryId}">General</a>`;
  }
}

function avatars(posters, users) {
  let result = "";
  posters.forEach(poster => {
    const user = users.find(u => u.id === poster.user_id);
    let avatar = user.avatar_template.replace("{size}", 30);

    if (avatar.startsWith("/user_avatar/")) {
      avatar = `${avatarUrl}${avatar}`;
    }

    result += `<img src="${avatar}" alt="${user.name}">`;
  });
  return result;
}

function showLatestPosts(obj) {
  const { users, topic_list } = obj;
  const { topics } = topic_list;

  const postsHTML = topics.map(topic => `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">
            ${topic.title}
          </a>
          ${forumCategory(topic.category_id)}
        </td>
        <td>
          <div class="avatar-container">
            ${avatars(topic.posters, users)}
          </div>
        </td>
        <td>${topic.posts_count - 1}</td>
        <td>${viewCount(topic.views)}</td>
        <td>${timeAgo(topic.bumped_at)}</td>
      </tr>
    `
  ).join("");

  document.getElementById("posts-container").innerHTML = postsHTML;
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  }
  catch (error) {
    console.log(error);
  }
}

fetchData();