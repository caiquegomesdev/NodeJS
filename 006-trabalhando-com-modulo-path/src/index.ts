/*
*Em resumo, um caminho absoluto fornece a localizacao completa desde a raizz do sistema de arquivos, enquanto um caminho relativo indica a localizacao em relacao ao diretorio atual ou a um ponto de referencia especifico.

__dirname: Essa Variavel contem o diretorio do arquivo atual, fornecendo o caminho do diretorio onde o arquivo reside.

__filename: Essa Variavel contem o caminho completo do arquivo atualmente em execucao, incluido o nome do arquivo.
*/

//console.log(__dirname);
//console.log(__filename);


import path from 'node:path';

console.log(path.join('/outra-pasta', '/gomes'));
console.log(path.resolve('src', '/outra-pasta'));

console.log();

console.log(path.dirname('D:/teste/'));
console.log(path.dirname(path.resolve()));
console.log(path.basename('gomes/teste'));

console.log();

console.log(path.extname('teste/gomes/index.ts'));
console.log(path.extname(path.resolve('ads.controller.ts')));