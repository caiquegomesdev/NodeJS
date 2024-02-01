import { CrawlerBahiaController } from 'controller/crawler-bahia.controller';
import { CrawlerVitoriaController } from 'controller/crawler-vitoria.controller';

class Init {
  constructor() {
    this._init();
  }

  private _init() {
    new CrawlerBahiaController().init();
    new CrawlerVitoriaController().init();
    console.log('Inicializado com sucesso!');
  }
}

new Init();
