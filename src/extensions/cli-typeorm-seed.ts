import { GluegunToolbox } from 'gluegun';

module.exports = (toolbox: GluegunToolbox) => {
  const {template, print: { error, success } } = toolbox;

  async function createTypeormSeed(nameSeed: string) {
    if (!nameSeed) {
      error('Name seed TypeORM must be specified');
      return;
    }
    nameSeed = nameSeed.trim();
    nameSeed = nameSeed.toLowerCase();

    const dateGetTime = new Date().getTime();
    const nameFile = `${dateGetTime}-${nameSeed}`;
    const nameFileCamelCase = nameSeed.replace(/\b(\w)/g, function (match, capture) {
      return capture.toUpperCase();
    }).replace(/\s+/g, '').replace('-', '');
    const nameClass = `${nameFileCamelCase}${dateGetTime}`
    await template.generate({
      template: 'typeorm-seed.ts.ejs',
      target: `src/shared/infra/typeorm/seeds/${nameFile}.ts`,
      props: { nameClass }
    });

    success('Successfully created file seed');
  }
  toolbox.createTypeormSeed = createTypeormSeed
}