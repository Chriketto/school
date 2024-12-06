document.getElementById('salvaDati').addEventListener('click', function () {
    // Recupera i dati dal modulo
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const indirizzo = document.getElementById('indirizzo').value;
    const città = document.getElementById('città').value;
    const email = document.getElementById('email').value;

    // Recupera l'array di anagrafiche dal localStorage (o inizializza un array vuoto)
    let anagrafiche = JSON.parse(localStorage.getItem('anagrafiche')) || [];

    // Aggiunge i nuovi dati
    anagrafiche.push({ nome, cognome, indirizzo, città, email});

    // Salva l'array aggiornato in localStorage
    localStorage.setItem('anagrafiche', JSON.stringify(anagrafiche));

    // Conferma il salvataggio
    alert('Dati salvati con successo!');
});