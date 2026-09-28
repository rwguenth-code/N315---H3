(function () {
  async function loadPage(pageName) {
    let page = Model.pages[pageName];

    if (!page) {
      page = Model.pages.home;
    }

    const response = await fetch(page);
    const html = await response.text();

    document.getElementById("app").innerHTML = html;
  }

  function route() {
    let pageName = location.hash.replace("#", "");

    if (pageName === "") {
      pageName = "home";
    }

    loadPage(pageName);
  }

  window.addEventListener("hashchange", route);

  route();
})();
