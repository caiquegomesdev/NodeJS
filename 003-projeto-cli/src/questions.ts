import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';
import fs from 'node:fs';
import path from 'path';

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
      if (!folderName) return 'Insira um valor para o nome!';

      // nao pode ter caracteres especiais
      if (/[^\w\s-]/.test(folderName)) return 'Não use caracteres especiais!';

      //nao pode deixar com o mesmo nome da repo do git
      if (
        folderName === 'boilerpalte-typescript-nodejs' ||
        folderName === 'boilerplate-scss'
      )
        return 'Nao e possivel criar a pasta com este nome!';

      //nao pode existir o mesmo nome do folderName

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return 'Ja existe uma pasta com este nome!';
        console.log(dir);
      } catch (error) {}
      return true;
    },
  },
];
