
const inputMezo = document.querySelector('#velemeny');
const gomb = document.querySelector('#kozzetesz');
const velemenyLista = document.querySelector('#velemenylista');

function velemenyHozzaadasa() {
    const szoveg = inputMezo.value;

    if (szoveg.trim() === "") {
        alert("Kérlek, írj be valamit!");
        return;
    }

    const ujElem = document.createElement('li');
    ujElem.innerHTML=`<span class="iro">Te: </span>"${szoveg}"`;
    velemenyLista.appendChild(ujElem);

    inputMezo.value = "";
}
gomb.addEventListener('click', velemenyHozzaadasa);
