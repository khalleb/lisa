import { GluegunToolbox } from 'gluegun';

module.exports = (toolbox: GluegunToolbox) => {
  const { print: { error } } = toolbox;

  async function createModuleSittax(nameModule: string) {
    if (!nameModule) {
      error('Name module Sittax module must be specified');
      return;
    }
    nameModule = nameModule.trim();
    nameModule = nameModule.toLowerCase();
  }

  toolbox.createModuleSittax = createModuleSittax
}