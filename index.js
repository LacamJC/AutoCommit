// Importe as dependencias necessarias com shelljs com 'npm i shelljs readline-sync
const shell = require('shelljs'); 
const readline = require('readline-sync');

function commitAndPush(){
    const msg = readline.question("Mensagem de commit: "); // Mensagem para o commit
    shell.exec('git add *');
    shell.exec(`git commit -am "${msg}"`);
    shell.exec('git push');
    console.log('Alterações realizadas com sucesso')
}

commitAndPush()
