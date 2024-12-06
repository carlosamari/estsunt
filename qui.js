for (const key in attr) {
    if (attr.hasOwnProperty(key)) {
        el.setAttribute(key, attr[key]);
    }
}
