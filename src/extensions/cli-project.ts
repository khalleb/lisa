import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  const { template, print: { error, success }, system } = toolbox;

  const pathTypes = 'src/@types';

  const pathConfig = 'src/config';

  const pathModules = 'src/modules';

  const pathShared = 'src/shared';
  const pathContainer = `${pathShared}/container`;
  const pathEnv = `${pathShared}/env`;
  const pathErrors = `${pathShared}/errors`;
  const pathInfra = `${pathShared}/infra`;
  const pathCommons = `${pathInfra}/commons`;
  const pathDevops = `${pathInfra}/devops`;
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
      target: `${nameProject}/README.md`,
    });
    await template.generate({
      template: 'package.ts.ejs',
      target: `${nameProject}/package.json`,
      props: { nameProject }
    });
    await template.generate({
      template: 'prettierignore.ts.ejs',
      target: `${nameProject}/.prettierignore`,
    });
    await template.generate({
      template: 'prettier.config.js.ejs',
      target: `${nameProject}/prettier.config.js`,
    });
    await template.generate({
      template: 'eslintignore.ts.ejs',
      target: `${nameProject}/.eslintignore`,
    });
    await template.generate({
      template: 'env.ts.ejs',
      target: `${nameProject}/env`,
    });
    await template.generate({
      template: 'env.ts.ejs',
      target: `${nameProject}/env.example`,
    });
    await template.generate({
      template: 'gitignore.ts.ejs',
      target: `${nameProject}/gitignore`,
    });
    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/docker-compose.yml`,
    });
    await template.generate({
      template: 'ormconfig.ts.ejs',
      target: `${nameProject}/ormconfig.js`,
    });
    await template.generate({
      template: 'editorconfig.ts.ejs',
      target: `${nameProject}/editorconfig`,
    });
    await template.generate({
      template: 'tsconfig.ts.ejs',
      target: `${nameProject}/tsconfig.json`,
    });


    await template.generate({
      template: 'index.ts.ejs',
      target: `${nameProject}/tmp/.gitkeep`,
    });

    await template.generate({
      template: 'express.ts.ejs',
      target: `${nameProject}/${pathTypes}/express.d.ts`,
    });
    await template.generate({
      template: 'global.ts.ejs',
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
      template: 'env-index.ts.ejs',
      target: `${nameProject}/${pathEnv}/index.ts`,
    });

    await template.generate({
      template: 'app-error.ts.ejs',
      target: `${nameProject}/${pathErrors}/AppError.ts`,
    });
    await template.generate({
      template: 'error.ts.ejs',
      target: `${nameProject}/${pathErrors}/Error.ts`,
    });
    await template.generate({
      template: 'logger.ts.ejs',
      target: `${nameProject}/${pathErrors}/Logger.ts`,
    });


    await template.generate({
      template: 'constants.ts.ejs',
      target: `${nameProject}/${pathCommons}/constants.ts`,
    });

    await template.generate({
      template: 'version.ts.ejs',
      target: `${nameProject}/${pathDevops}/version.ts`,
    });

    await template.generate({
      template: 'update-version.ts.ejs',
      target: `${nameProject}/${pathDevops}/updateVersion.ts`,
    });

    await template.generate({
      template: 'data-acess-dto.ts.ejs',
      target: `${nameProject}/${pathDtos}/IDataAcessDTO.ts`,
    });
    await template.generate({
      template: 'infra-dto.ts.ejs',
      target: `${nameProject}/${pathDtos}/IInfraDTO.ts`,
    });

    await template.generate({
      template: 'base-controller.ts.ejs',
      target: `${nameProject}/${pathHttp}/controllers/BaseController.ts`,
    });

    await template.generate({
      template: 'internationalization-index.ts.ejs',
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
      template: 'ensure-authenticated-index.ejs',
      target: `${nameProject}/${pathHttp}/middlewares/ensureAuthenticated/index.ts`,
    });
    await template.generate({
      template: 'ensure-authenticated-middleware.ejs',
      target: `${nameProject}/${pathHttp}/middlewares/ensureAuthenticated/EnsureAuthenticatedMiddleware.ts`,
    });

    await template.generate({
      template: 'routes-index.ts.ejs',
      target: `${nameProject}/${pathHttp}/routes/index.ts`,
    });

    await template.generate({
      template: 'validation.routes.ts.ejs',
      target: `${nameProject}/${pathHttp}/routes/validation.routes.ts`,
    });

    await template.generate({
      template: '404.ts.ejs',
      target: `${nameProject}/${pathHttp}/views/404.ejs`,
    });
    await template.generate({
      template: 'welcome.ts.ejs',
      target: `${nameProject}/${pathHttp}/views/welcome.ejs`,
    });

    await template.generate({
      template: 'server.ts.ejs',
      target: `${nameProject}/${pathHttp}/server.ts`,
    });

    await template.generate({
      template: 'ibase-service.ts.ejs',
      target: `${nameProject}/${pathService}/IBaseService.ts`,
    });


    await template.generate({
      template: 'base-repository.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/base/BaseRepository.ts`,
    });
    await template.generate({
      template: 'entity-base.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/base/EntityBase.ts`,
    });
    await template.generate({
      template: 'ibase-repository.ts.ejs',
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
      template: 'typeorm-index.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/index.ts`,
    });
    await template.generate({
      template: 'pagination.ts.ejs',
      target: `${nameProject}/${pathTypeOrm}/Pagination.ts`,
    });


    await template.generate({
      template: 'validations.ts.ejs',
      target: `${nameProject}/${pathUtils}/validations.ts`,
    });
    await template.generate({
      template: 'string-util.ts.ejs',
      target: `${nameProject}/${pathUtils}/stringUtil.ts`,
    });
    await template.generate({
      template: 'object-util.ts.ejs',
      target: `${nameProject}/${pathUtils}/objectUtil.ts`,
    });

    success('Successfully created project');
  }
  toolbox.createProject = createProject
}
