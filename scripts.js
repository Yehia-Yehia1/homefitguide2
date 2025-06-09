function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
}

document.addEventListener('click', function (event) {
    const sideMenu = document.getElementById('sideMenu');
    const menuToggle = document.querySelector('.menu-toggle');
    const isClickInsideMenu = sideMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
    }
});
function searchArticles() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const articles = document.querySelectorAll(".featured-article");

    articles.forEach(article => {
        const title = article.querySelector("h2").innerText.toLowerCase();
        const altText = article.querySelector("img").alt.toLowerCase();

        if (title.includes(input) || altText.includes(input)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}
