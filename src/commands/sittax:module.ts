
import { GluegunToolbox } from 'gluegun'
  

module.exports = {
  name: 'sittax:module',
  description: 'Create new module SITTAX',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      createModuleSittax,
    } = toolbox
    const name = parameters.first
    await createModuleSittax(name)
  },
}
