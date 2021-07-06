import { GluegunToolbox } from 'gluegun';

module.exports = (toolbox: GluegunToolbox) => {
  const { template, print: { error } } = toolbox;

  async function createModule(nameModule: string) {
    if (!nameModule) {
      error('Name module must be specified');
      return;
    }
    nameModule = nameModule.trim();
    nameModule = nameModule.toLowerCase();

    const nameModuleCase = nameModule.replace(/\b(\w)/g, function (match, capture) {
      return capture.toUpperCase();
    }).replace(/\s+/g, '').replace('-', '');

    const pathModules = 'src/modules';

    await template.generate({
      template: 'index.ts.ejs',
      target: `${pathModules}/${nameModule}/dtos/I${nameModuleCase}DTO.ts`,
    });

    await template.generate({
      template: 'controller.ts.ejs',
      target: `${pathModules}/${nameModule}/infra/http/controllers/${nameModuleCase}Controller.ts`,
      props: { nameModuleCase, nameModule }
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${pathModules}/${nameModule}/infra/http/routes/${nameModule}.routes.ts`,
    });

    await template.generate({
      template: 'entities.ts.ejs',
      target: `${pathModules}/${nameModule}/infra/typeorm/entities/${nameModuleCase}.ts`,
      props: { nameModuleCase, nameModule }
    });
    await template.generate({
      template: 'repository.ts.ejs',
      target: `${pathModules}/${nameModule}/infra/typeorm/repositories/${nameModuleCase}Repository.ts`,
      props: { nameModuleCase, nameModule }
    });

    await template.generate({
      template: 'irepository.ts.ejs',
      target: `${pathModules}/${nameModule}/repositories/I${nameModuleCase}Repository.ts`,
      props: { nameModuleCase, nameModule }
    });

    await template.generate({
      template: 'services.ts.ejs',
      target: `${pathModules}/${nameModule}/services/${nameModuleCase}Services.ts`,
      props: { nameModuleCase, nameModule }
    });
  }
  toolbox.createModule = createModule
}