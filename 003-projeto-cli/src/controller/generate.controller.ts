import shellJs from 'shelljs';
import path from 'node:path';
import fs from 'node:fs';

//interface
import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';

//Enum
import { EGitName } from 'enum/git-name.enum';
import { IAnswers } from 'interface/answers.interface';



class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answers.folderName);
          break;
        case EChoicesBoilerPlate.SCSS:
          this._execPath(EGitName.SCSS, answers.folderName);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
  private _execPath(gitName: string, folderName: string) {
    try {
        shellJs.cd(path.resolve());
        shellJs.exec(`git clone https://github.com/caiquegomesdev/${gitName}.git`);

        fs.renameSync(
            `${path.join(path.resolve(),gitName)}`,
            `${path.join(path.resolve(),folderName)}`
        );

        console.log('Arquivo criado com sucesso');
        
        return shellJs.exit();
    } catch(error){
        console.log(error);
        
    }
  }
}

export const GenFile = new GenerateController();
