export function setAttributes(elemtent, attributes) {
    for (const key in attributes) {
        elemtent.setAttributes(key, attributes[key]);
    };
}
    