
import { GluegunToolbox } from 'gluegun'
  

module.exports = {
  name: 'generate:project',
  description: 'Create new project SOLID',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      createProject,
    } = toolbox
    const name = parameters.first
    await createProject(name)
  },
}
