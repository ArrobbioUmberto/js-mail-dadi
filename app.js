console.log('ciao')
// creare un array con all'interno delle mail 
const mail = ['pippo@gmail.com','pluto@gmail.com','paperino@gmail.com','topolino@gmail.com']
console.log(mail)

// chiedere all'utente tramite prompt la sua email 
const emailUtente = prompt("Dimmi pure la tua mail")
console.log(emailUtente)
// controllare che la sua mail sia nella lista 
for (let i = 0; i < mail.length; i++){
    if (emailUtente === mail[i]){
        console.log('la mail esiste')
    }else {
        console.log('la mail non si trova qua dentro')
    }
}
// se c'è digli che è una bella mail sennò digli che ti dispiace ma la mail non è presente