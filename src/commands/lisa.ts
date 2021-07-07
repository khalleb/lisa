
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'lisa',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Oi, eu sou a lisa.')
  },
}

module.exports = command
