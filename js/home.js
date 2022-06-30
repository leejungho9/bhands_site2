/*header js*/
let sidebar = false;
let sidebarEl = document.querySelector(".nav-menu");

let workMenu = false;
let workMenuEl = document.querySelector(".work-menu");
let workMenuUl = document.querySelector(".work-menu-ul");

function setworkMenu() {
  workMenu = true;
}

function showSidebar() {
  console.log("햄버거 버튼 클릭" + sidebar);
  sidebar = !sidebar;
  sidebar
    ? (sidebarEl.className = "nav-menu active")
    : (sidebarEl.className = "nav-menu");
}

function showworkMenu() {
  console.log("work 버튼 클릭" + workMenu);
  workMenu
    ? (workMenuEl.className = "work-menu active")
    : (workMenuEl.className = "work-menu");

  workMenu
    ? (workMenuUl.className = "work-menu-ul active")
    : (workMenuUl.className = "work-menu-ul");
  workMenu = !workMenu;
}
if (sidebar === true) {
  setworkMenu(false);
  setworkMenu();
}

let path = window.location.pathname;
console.log(path);

if (!sidebar) {
  setworkMenu(false);
}
if (
  path !== "/" &&
  path !== "/about" &&
  path !== "/contact" &&
  path !== "/artist"
) {
} else {
  setworkMenu(true);
}

function workdetailMenu(e) {
  console("눌렷당");
  console.log(e);
}

window.onload = function () {
  let artgoodsEl = document.getElementsByClassName(".a_artgoods");
  let calendarEl = document.querySelector(".a_calendar");
  let diaryEl = document.querySelector(".a_diary");
  let packageEl = document.querySelector(".a_package");
  let cardEl = document.querySelector(".a_card");
  let catalogueEl = document.querySelector(".a_catalogue");

  if (path == "/html/artgoods.html") {
    artgoodsEl.className = "detailMenu active";
  } else if (path == "/calendar.html") {
    calendarEl.className = "detailMenu active";
  } else if (path == "/diary") {
    diaryEl.className = "detailMenu active";
  } else if (path == "/package") {
    packageEl.className = "detailMenu active";
  } else if (path == "/card") {
    cardEl.className = "detailMenu active";
  } else if (path == "/catalogue") {
    catalogueEl.className = "detailMenu active";
  }
  let detailMenuEl = document.querySelectorAll(".detialMenu");
  console.log(detailMenuEl);

  for (var i = 0; i < detailMenuEl.length; i++) {
    detailMenuEl[i].addEventListener("click", function () {
      console.log("클릭");
    });
  }
};

// let currentMenu;
// let menu = document.querySelector(".work-menu-ul > li > a");
// menu.addEventListener("click", clickHandler);
// console.log(menu);

// function clickHandler(e) {
//   console.log(e);
// }
