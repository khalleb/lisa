
import { GluegunToolbox } from 'gluegun'
  

module.exports = {
  name: 'typeorm:seed',
  description: 'Create new file SEED TypeORM',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      createTypeormSeed,
    } = toolbox
    const name = parameters.first
    await createTypeormSeed(name)
  },
}
