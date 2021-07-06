import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template, print: { error }, system } = toolbox;

  const pathTypes = 'src/@types';

  const pathConfig = 'src/config';

  const pathModules = 'src/modules';

  const pathShared = 'src/shared';
  const pathContainer = `${pathShared}/container`;
  const pathEnv = `${pathShared}/env`;
  const pathErrors = `${pathShared}/errors`;
  const pathInfra = `${pathShared}/infra`;
  const pathCommons = `${pathInfra}/commons`;
  const pathDtos = `${pathInfra}/dtos`;
  const pathHttp = `${pathInfra}/http`;
  const pathService = `${pathInfra}/services`;
  const pathTypeOrm = `${pathInfra}/typeorm`;
  const pathUtils = `${pathInfra}/utils`;

  async function createProject(nameProject: string) {
    if (!nameProject) {
      error('Name project must be specified');
      return;
    }

    nameProject = nameProject.trim();
    nameProject = nameProject.toLowerCase();

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypes}/env.d.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypes}/express.d.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypes}/global.d.ts`,
    });

    
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathConfig}/auth.ts`,
    });

    await  system.run(`mkdir ${nameProject}/${pathModules}`);

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathContainer}/index.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathContainer}/utils/ProviderNames.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathContainer}/providers/index.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathContainer}/providers/HashProvider/index.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathContainer}/providers/HashProvider/models/IHashProvider.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathContainer}/providers/HashProvider/implementations/BCryptHashProvider.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathContainer}/providers/HashProvider/dtos/IHashProviderDTO.ts`,
    });


    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathEnv}/index.ts`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathErrors}/AppError.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathErrors}/Error.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathErrors}/Logger.ts`,
    });


    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathCommons}/constants.ts`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathDtos}/IDataAcessDTO.ts`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/controllers/BaseController.ts`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/internationalization/index.ts`,
    });
    await template.generate({
      template: 'internationalization.ts.ejs',
      target: `${nameProject}/${pathHttp}/internationalization/locales/pt-BR.json`,
    });
    await template.generate({
      template: 'internationalization.ts.ejs',
      target: `${nameProject}/${pathHttp}/internationalization/locales/en-US.json`,
    });


    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/middlewares/rateLimiter.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/middlewares/ensureAuthenticated/index.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/middlewares/ensureAuthenticated/EnsureAuthenticatedMiddleware.ts`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/routes/index.ts`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/views/404.ejs`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/server.ts`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/updateVersion.ts`,
    });


    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathHttp}/updateVersion.ts`,
    });

    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathService}/IBaseService.ts`,
    });


    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/base/BaseRepository.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/base/EntityBase.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/base/IBaseRepository.ts`,
    });
    await  system.run(`mkdir ${nameProject}/${pathTypeOrm}/entities`);
    await  system.run(`mkdir ${nameProject}/${pathTypeOrm}/migrations`);
    await  system.run(`mkdir ${nameProject}/${pathTypeOrm}/seeds`);
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/utils/tableNames.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/index.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/Pagination.ts`,
    });


    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathUtils}/validations.ts`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/${pathUtils}/version.ts`,
    });
  }
  toolbox.createProject = createProject
}
