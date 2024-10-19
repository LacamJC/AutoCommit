// Importe as dependencias necessarias com shelljs com 'npm i shelljs readline-sync
const shell = require('shelljs'); 
const readline = require('readline-sync');
const respostas = ["s", "S", "Y", "y"]

function timeOut(msg){
    setTimeout((msg)=>{console.log(msg)},2000)
}

function commitAndPush(){
    const msg = readline.question("Mensagem de commit: "); // Mensagem para o commit
    var confirm = false;
    console.log(`Mensagem de commit: ${msg}`);
    timeOut();
    confirm_msg = readline.question('Confirmar commit : ');
    confirm_msg = confirm_msg[0].toUpperCase();

   
        if(respostas.includes(confirm_msg)){
            timeOut("Commit permitido")
            confirm = true;
            try{

                shell.exec('git add *');
                timeOut("Arquivos adicionados");
                
                shell.exec(`git commit -am "${msg}"`);
                timeOut("Commit realizado")
                shell.exec('git push');
                timeOut("Arquivos enviados para repositorio remoto")
                console.log('Alterações realizadas com sucesso !')
            }catch(err){
                console.log(`Erro ao executar script: ${err}`);
            }
        }
       
    

}

commitAndPush()
