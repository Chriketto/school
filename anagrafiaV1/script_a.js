let tabella=[]
let i=0;

function salvaDati(){
    
    let nome=document.getElementById("nome").value;
    let cognome=document.getElementById("cognome").value;
    let citta=document.getElementById("citta").value;
    let indirizzo=document.getElementById("indirizzo").value;
    let mail=document.getElementById("mail").value;

    let dati=[nome,cognome,citta,indirizzo,mail]


    tabella.push(dati);
    i++;

   localStorage.setItem("anag",tabella);

    

    document.getElementById("nome").value="";
    document.getElementById("cognome").value="";
    document.getElementById("citta").value="";
    document.getElementById("indirizzo").value="";
    document.getElementById("mail").value="";
    
    inserisciDati(dati);
}
function inserisciDati(dati){
    let tab = document.getElementById("tabella");
    let nuovaRiga = tab.insertRow();

    let contatore = nuovaRiga.insertCell(0);
    contatore.innerHTML = i;

    let Nome = nuovaRiga.insertCell(1);
    Nome.innerHTML = dati.nome;

    let Cognome = nuovaRiga.insertCell(2);
    Cognome.innerHTML = dati.cognome;

    let Citta = nuovaRiga.insertCell(3);
    Citta.innerHTML = dati.citta;

    let Indirizzo = nuovaRiga.insertCell(4);
    Indirizzo.innerHTML = dati.indirizzo;

    let cellMail = nuovaRiga.insertCell(5);
    cellMail.innerHTML = dati.mail;
}
