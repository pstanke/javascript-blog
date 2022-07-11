{
    ("use strict");
    // document.getElementById("test-button").addEventListener("click", function () {
    //     const links = document.querySelectorAll(".titles a");
    //     console.log("links:", links);
    // });
    const titleClickHandler = function (event) {
        event.preventDefault();
        console.log("Link was clicked!");
        console.log(event);

        /* [DONE] remove class 'active' from all article links  */
        const activeLinks = document.querySelectorAll(".titles a.active");

        for (let activeLink of activeLinks) {
            activeLink.classList.remove("active");
        }

        /* [DONE] add class 'active' to the clicked link */
        const clickedElement = this;
        console.log("clickedElement:", clickedElement);
        clickedElement.classList.add("active");

        /* [DONE] remove class 'active' from all articles */
        const activeArticles = document.querySelectorAll(".post.active");

        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove("active");
        }

        /* [DONE] get 'href' attribute from the clicked link */
        const articleSelector = clickedElement.getAttribute("href");
        console.log(articleSelector);

        /* [DONE] find the correct article using the selector (value of 'href' attribute) */
        const targetArticle = document.querySelector(articleSelector);
        console.log(targetArticle);

        /* [DONE] add class 'active' to the correct article */
        targetArticle.classList.add("active");
    };

    const optArticleSelector = ".post";
    const optTitleSelector = ".post-title";
    const optTitleListSelector = ".titles";

    function generateTitleLinks() {
        /* remove contents of titleList */
        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = "";
        console.log(titleList);

        /* for each article */
        const articles = document.querySelectorAll(optArticleSelector);
        let html = "";
        for (let article of articles) {
            /* get the article id */
            const articleId = article.getAttribute("id");
            console.log(articleId);

            /* find the title element */
            /* get the title from the title element */
            const articleTitle =
                article.querySelector(optTitleSelector).innerHTML;

            console.log(articleTitle);

            /* create HTML of the link */
            const linkHTML = `<li><a href="#${articleId}"><span>${articleTitle}</span></a></li>`;
            console.log(linkHTML);
            html += linkHTML;
        }
        /* insert links into titleList */
        titleList.innerHTML = html;

        const links = document.querySelectorAll(".titles a");

        for (let link of links) {
            link.addEventListener("click", titleClickHandler);
        }
    }

    generateTitleLinks();
}
