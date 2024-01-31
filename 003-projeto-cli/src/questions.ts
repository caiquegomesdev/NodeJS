import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar?',
    choices: [EChoicesBoilerPlate.NODEJS_TS, EChoicesBoilerPlate.SCSS],
  },
  {
    type: 'input',
    name: 'techName',
    message: 'Qual nome devo dar para a pasta do Projeto?',
    validate(folderName: string){
        console.log(folderName);
        // FolderName - nao pode ser null
        // nao pode ter caracteres especiais
        //nao pode existir o mesmo nome do folderName
        //nao pode deixar com o mesmo nome da repo do git
        return true;
    },
  },
];
