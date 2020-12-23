export function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttributes(key, attributes[key]);
    };
}
    