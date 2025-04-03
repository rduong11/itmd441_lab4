// 1)
(function() {
    let heroTitle = document.querySelector("#hero h1");
    if (heroTitle) heroTitle.textContent = "Uplift Your Brand with Stellar Marketing";
})();

// 2) 
(function() {
    let heroParagraph = document.querySelector("#hero p");
    if (heroParagraph) {
        heroParagraph.innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.";
    }
})();

// 3)
(function() {
    let heroSection = document.querySelector("#hero");
    if (heroSection) {
        heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
        heroSection.style.backgroundSize = "cover";
        heroSection.style.backgroundPosition = "center";
    }
})();

// 4)
(function() {
    let footer = document.querySelector("footer");
    let nav = document.querySelector("header");
    if (footer && nav) {
        nav.style.backgroundColor = getComputedStyle(footer).backgroundColor;
    }
})();

// 5)
(function() {
    let ctaButton = document.querySelector("#hero a");
    if (ctaButton) ctaButton.remove();
})();

// 6)
(function() {
    let headings = document.querySelectorAll("h2");
    headings.forEach(heading => {
        let sectionText = heading.textContent.trim();
        if (["Our Services", "Specialized Marketing Solutions For", "Contact Us"].includes(sectionText)) {
            heading.style.textAlign = "center";
        }
    });
})();

// 7)
(function() {
    document.querySelectorAll("#services .material-symbols-outlined").forEach(icon => {
        icon.style.color = "#47C714";
    });
})();

// 8)
(function() {
    let firstIcon = document.querySelector("#services .material-symbols-outlined");
    if (firstIcon) firstIcon.textContent = "ads_click";
})();

// 9)
(function() {
    let styleTag = document.createElement("style");
    styleTag.textContent = `
        @media (min-width: 1024px) {
            #solutions .grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 25px;
            }
        }
    `;
    document.head.appendChild(styleTag);
})();

// 10)
(function() {
    let musiciansImage = document.querySelector("#solutions img[alt='Musicians']");
    if (musiciansImage) musiciansImage.src = "https://picsum.photos/id/453/400/300";
})();

