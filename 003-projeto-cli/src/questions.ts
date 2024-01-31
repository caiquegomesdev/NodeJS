import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';
import fs from 'node:fs';
import path from 'path';
import { EErros } from 'enum/errors.enum';
import { EGitName } from 'enum/git-name.enum';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar?',
    choices: [EChoicesBoilerPlate.NODEJS_TS, EChoicesBoilerPlate.SCSS],
  },
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual nome devo dar para a pasta do Projeto?',
    validate(folderName: string) {
      console.log(folderName);
      // FolderName - nao pode ser null
      if (!folderName) return EErros.ERROR_NULL;

      // nao pode ter caracteres especiais
      if (/[^\w\s-]/.test(folderName)) return EErros.ERROR_SPECIAL_CHARACTERES;

      //nao pode deixar com o mesmo nome da repo do git
      if (folderName === EGitName.NODEJS_TS || folderName === EGitName.SCSS)
        return EErros.ERROR_GIT_NAME;

      //nao pode existir o mesmo nome do folderName

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return EErros.ERROR_INVALID_FOLDER;
        console.log(dir);
      } catch (error) {}
      return true;
    },
  },
];
