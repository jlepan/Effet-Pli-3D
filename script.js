const articles = document.querySelectorAll(".fold")

articles.forEach(article => {
    const img = article.querySelector("img");
    const clone = img.cloneNode(true);

    const divTop = document.createElement("div");
    divTop.classList.add("top");
    divTop.appendChild(img);
    article.appendChild(divTop);

    const divBottom = document.createElement("div");
    divBottom.classList.add("bottom");
    divBottom.appendChild(clone);
    article.appendChild(divBottom);

    const divShadowT = document.createElement("div");
    divShadowT.classList.add("shadow-top");
    divTop.appendChild(divShadowT);

    const divShadowB = document.createElement("div");
    divShadowB.classList.add("shadow-bottom");
    divBottom.appendChild(divShadowB);
})
