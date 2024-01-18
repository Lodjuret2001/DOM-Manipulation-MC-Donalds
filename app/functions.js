export function applyStyles(element, styles) {
    Object.keys(styles).forEach(property => {
        element.style[property] = styles[property];
    })
}

export function applyGlobalStyles(element, styles) {
    const elements = document.querySelectorAll(element);

    if (elements.length === 0) {
        console.log('No elements found for element:', element);
        return;
    }

    elements.forEach(element => {
        Object.keys(styles).forEach(property => {
            element.style[property] = styles[property];
        });
    });
}

export function buildFragment(number, element) {

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < number; i++) {
        const child = document.createElement(element);
        fragment.appendChild(child);
    }
    return fragment;
}

export function createLinks(container, links) {
    links.forEach(linkData => {
        const link = document.createElement('a');
        link.href = linkData.href;
        link.textContent = linkData.text;
        container.appendChild(link);
    });
}