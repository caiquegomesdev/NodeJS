import inquirer from 'inquirer';
//Questions
import { questions } from 'questions';
//Interface
import { IAnswers } from 'interface/answers.interface';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      console.log(answers);
    });
  }
}
new Init();
