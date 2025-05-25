export function createElement(tag, classes, parent) {
    const element = document.createElement(tag);

    if (classes) {
        classes.forEach(className => {
        element.classList.add(className);
    });
    }
    // attributes.forEach(attribute => {
    //     element.setAttribute(attribute.name, attribute.value);
    // });
    parent.append(element);

    return element;
}