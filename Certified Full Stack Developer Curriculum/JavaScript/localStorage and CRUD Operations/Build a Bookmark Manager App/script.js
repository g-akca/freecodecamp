const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkButton = document.getElementById("add-bookmark-button")
const categoryName = document.querySelectorAll(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryButton = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

function getBookmarks() {
  try {
    const parsed = JSON.parse(localStorage.getItem("bookmarks"));

    if (Array.isArray(parsed) && parsed.every(item => item.hasOwnProperty("name") && item.hasOwnProperty("category") && item.hasOwnProperty("url"))) {
      return parsed;
    }

    return [];
  }
  catch {
    return [];
  }
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

function showCategories() {
  categoryName.forEach(category => category.innerText = categoryDropdown.value);

  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(bookmark => bookmark.category == categoryDropdown.value);

  if (bookmarks.length) {
    categoryList.innerHTML = "";
    bookmarks.forEach(bookmark => {
      categoryList.innerHTML += `
        <div>
          <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark">
          <label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>
        </div>
      `;
    })
  }
  else {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  }

  displayOrHideCategory();
}

addBookmarkButton.addEventListener("click", () => {
  categoryName.forEach(category => category.innerText = categoryDropdown.value);
  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
  formSection.classList.add("hidden");
  mainSection.classList.remove("hidden");
});

addBookmarkButtonForm.addEventListener("click", () => {
  let bookmarks = getBookmarks();
  bookmarks.push({name: nameInput.value, category: categoryDropdown.value, url: urlInput.value});
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  nameInput.value = "";
  urlInput.value = "";
  displayOrCloseForm();
});

viewCategoryButton.addEventListener("click", showCategories);

closeListButton.addEventListener("click", () => {
  bookmarkListSection.classList.add("hidden");
  mainSection.classList.remove("hidden");
});

deleteBookmarkButton.addEventListener("click", () => {
  let bookmarks = getBookmarks();
  const checked = document.querySelector('input[type="radio"]:checked');
  bookmarks.splice(bookmarks.findIndex(bookmark => bookmark.name == checked.id && bookmark.category == categoryDropdown.value), 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  checked.parentElement.remove();
});