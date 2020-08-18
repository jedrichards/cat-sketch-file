import { fromFile } from '@sketch-hq/sketch-assistant-utils'
import meow from 'meow'
import { resolve } from 'path'

const cli = meow()

fromFile(resolve(cli.input[0]))
    .then(file => console.log(JSON.stringify(file, null, 2)))
    .catch(err => console.error(err))