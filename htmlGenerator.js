function htmlGenerator(tag, content) {
    return `<h${tag}>${content}</h${tag}>`
}

console.log(htmlGenerator('1', 'Hi..My name is Slim Shady'))