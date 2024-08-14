import { createPath } from './createPath.js'

const handlerEror = (res, err) => {
    console.log(err)
    res.render(createPath('error'), { title: 'ERROR' })
}

export {
    handlerEror,
}