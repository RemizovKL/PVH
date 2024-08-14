import path from 'path'

const createPath = (name) => path.resolve('.', 'views', `${name}.ejs`)
const createErrorPath = (name) => path.resolve( '.', 'views', 'errors', `${name}.ejs`)

export {
    createPath,
    createErrorPath,
}