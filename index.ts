import { fromFile } from '@sketch-hq/sketch-file'
import meow from 'meow'
import { resolve } from 'path'

const cli = meow()

fromFile(resolve(cli.input[0]))
    .then(file => console.log(JSON.stringify(file.contents, null, 2)))
    .catch(err => console.error(err))