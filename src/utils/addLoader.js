export function addLoader(parent) {
    const loader = document.createElement("div");
    loader.innerHTML = "<span>Загрузка...</span>";
    loader.classList.add("loader");
    // // loader.id = loader;
    parent.append(loader);
    console.log("Добавили индикатор загрузки")
    // let interval = setInterval(() => {
    //     console.log(1)
    //     if (document.querySelector(".book-image img")) {
    //         console.log("Мы нашли его!")
    //         clearInterval(interval);
    //         document.querySelector(".book-image img").addEventListener("load", () => {
    //             loader.remove();
    //             console.log("Загрузка завершена")
    //         });
    //     }
    // }, 100);
}

export function removeLoader() {
    let interval = setInterval(() => {
        console.log("3. Ищем фото");
        if (document.querySelector(".book-image img")) {
            console.log(document.querySelector(".book-image img"));
            clearInterval(interval);
            document.querySelector(".book-image img").addEventListener("load", () => {
                document.querySelector(".loader").remove();
                console.log("4. Загрузка завершена")
            });
        }
    }, 100);
}