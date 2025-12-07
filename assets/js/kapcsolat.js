const kuldesGomb = document.querySelector('#kuldes');

kuldesGomb.addEventListener('click', function() {
    
    const nev = document.querySelector('#nev').value.trim();
    const email = document.querySelector('#email').value.trim();
    const telefon = document.querySelector('#telefon').value.trim();
    const idopont = document.querySelector('#idopont').value;
    const kapcsolat = document.querySelector('input[name="contact_preference"]:checked');
    
    const messageBox = document.querySelector('#message');

    if (nev === "" || email === "" || telefon === "" || idopont === "" || !kapcsolat) {

        messageBox.textContent = "Hiba: Kérlek tölts ki minden mezőt!";
        messageBox.style.color = "red";
    } else {
        messageBox.textContent = "Sikeres küldés! Köszönjük, " + nev + "!";
        messageBox.style.color = "green"
        
        document.querySelector('#nev').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#telefon').value = "";
        document.querySelector('#idopont').value = "";
        if(kapcsolat) kapcsolat.checked = false;
    }
});
