if (localStorage.length > 0)
{
    showBookmarks();
}

let form = document.getElementById("form");

form.addEventListener("submit", (e) =>
{
    e.preventDefault();
    let title = document.getElementById("title");
    let desc = document.getElementById("desc");
    let url = document.getElementById("url");

    let bookmarks = localStorage.getItem("bookmarks");
    if (bookmarks == null)
    {
        bookmarksObj = [];
    }
    else
    {
        bookmarksObj = JSON.parse(bookmarks);
    }

    let data = {
        title: title.value,
        desc: desc.value,
        url: url.value,
    }

    bookmarksObj.push(data);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksObj));
    // localStorage.clear();

    title.value = "";
    desc.value = "";
    url.value = "";

    showBookmarks();
})

function showBookmarks()
{
    let bookmarks = localStorage.getItem("bookmarks");

    if (bookmarks == null)
    {
        bookmarksObj = [];
    }
    else
    {
        bookmarksObj = JSON.parse(bookmarks);
    }

    let html = "";

    if (bookmarksObj.length > 0)
    {
        bookmarksObj.forEach((el, i) =>
        {
            html += `
            <div class="card">
          <div class="card__title">
            <h4> ${el.title} </h4>
          </div>
          <div class="card__content">
            <p> ${el.desc} </p>
            <a href="${el.url}" target="_blank"> Go </a>
          </div>
        </div>
            `;
        })

        let mainDiv = document.getElementById("mainDiv");
        mainDiv.innerHTML = html;
    }
}