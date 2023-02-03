console.log('ciao')
// creare un array con all'interno delle mail 
const mail = ['pippo@gmail.com','pluto@gmail.com','paperino@gmail.com','topolino@gmail.com']
console.log(mail)

// chiedere all'utente tramite prompt la sua email 
const emailUtente = prompt("Dimmi pure la tua mail")
console.log(emailUtente)
// controllare che la sua mail sia nella lista 
const messaggeForUser = document.getElementById('mail')
console.log(messaggeForUser)
for (let i = 0; i < mail.length; i++){
    let emailVerify = emailUtente

    let emailDenied = emailUtente


    if (emailUtente === mail[i]){
        messaggeForUser.innerHTML = '<h1> Ottimo ' + emailVerify + ' è presente nel nostro database. Bentornato </h1>'
        break
        // console.log('mail verificata')
    } else {
        messaggeForUser.innerHTML = '<h1> Peccato ' + emailDenied + ' non fa parte del nostro database.Iscriviti alla community se vuoi rimanere aggiornato </h1>'
    }


}







// se c'è digli che è una bella mail sennò digli che ti dispiace ma la mail non è presente