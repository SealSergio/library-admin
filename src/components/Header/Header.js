export function Header() {
    document.body.insertAdjacentHTML("afterbegin",
        `
            <header class="header">
                <div class="container header__container">
                    <h1 class="header__title">
                        <a href="#" target="_blank">Книжный дом</a>            
                    </h1>
                    <div class="header__btns-right">
                        <button class="header__btn header__btn--user btn-reset">Профиль</button>
                        <button class="header__btn header__btn--mode btn-reset">Тема</button>
                    </div>
                </div>
            </header>
        `
    );

    // handleClickOnBtnUser();
    // handleClickOnBtnMode();
    document.querySelector(".header__btn--mode").addEventListener("click", () => {
        localStorage.setItem("dark-mode", (localStorage.getItem("dark-mode") === "true" ? "false" : "true"));
        document.body.classList.toggle("dark-mode");
    });
}
