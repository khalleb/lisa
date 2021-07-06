
import { GluegunToolbox } from 'gluegun'
  

module.exports = {
  name: 'generate:module',
  description: 'Create new module',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      createModule,
    } = toolbox
    const name = parameters.first
    await createModule(name)
  },
}
