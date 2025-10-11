let lunches = [];

function addLunchToEnd(lunchMenu, lunch) {
  lunchMenu.push(lunch);
  console.log(lunch + " added to the end of the lunch menu.");
  return lunchMenu;
}

function addLunchToStart(lunchMenu, lunch) {
  lunchMenu.unshift(lunch);
  console.log(lunch + " added to the start of the lunch menu.");
  return lunchMenu;
}

function removeLastLunch(lunchMenu) {
  if (lunchMenu.length != 0) {
    let lunch = lunchMenu.pop();
    console.log(lunch + " removed from the end of the lunch menu.");
  }
  else {
    console.log("No lunches to remove.");
  }

  return lunchMenu;
}

function removeFirstLunch(lunchMenu) {
  if (lunchMenu.length != 0) {
    let lunch = lunchMenu.shift();
    console.log(lunch + " removed from the start of the lunch menu.");
  }
  else {
    console.log("No lunches to remove.");
  }
  
  return lunchMenu;
}

function getRandomLunch(lunchMenu) {
  if (lunchMenu.length != 0) {
    let randomIndex = Math.floor(Math.random() * lunchMenu.length);
    console.log("Randomly selected lunch: " + lunchMenu[randomIndex]);
  }
  else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(lunchMenu) {
  if (lunchMenu.length != 0) {
    console.log("Menu items: " + lunchMenu.join(", "));
  }
  else {
    console.log("The menu is empty.");
  }
}