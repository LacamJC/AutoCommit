// Importe as dependencias necessarias com shelljs com 'npm i shelljs readline-sync
const shell = require('shelljs'); 
const readline = require('readline-sync');
const respostas = ["s", "S", "Y", "y"]

function commitAndPush(){
    const msg = readline.question("Mensagem de commit: "); // Mensagem para o commit
    var confirm = false;
    console.log(`Mensagem de commit: ${msg}`);
    confirm_msg = readline.question('Confirmar commit : ');
    confirm_msg = confirm_msg[0].toUpperCase();

   
        if(respostas.includes(confirm_msg)){
            console.log('Tarefa permitida'); 
            confirm = true;
            try{

                shell.exec('git add *');
                shell.exec(`git commit -am "${msg}"`);
                shell.exec('git push');
                console.log('Alterações realizadas com sucesso')
            }catch(err){
                console.log(`Erro ao executar script: ${err}`);
            }
        }
       
    

}

commitAndPush()
