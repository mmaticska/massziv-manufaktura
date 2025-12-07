
const termekek = [
    {
        cim: "Nagy méretű étkezőasztal",
        leiras: "Ezen lehet a legmasszívabbakat enni.",
        ar: 100000,
        kep: "assets/img/asztal.png"
    },
    {
        cim: "Íróasztal",
        leiras: "Masszív tanuláshoz tökéletes.",
        ar: 70000,
        kep: "assets/img/iroasztal.png"
    },
    {
        cim: "Éjjeliszekrény",
        leiras: "E mellet nagyon masszívan lehet aludni.",
        ar: 25000,
        kep: "assets/img/ejjeliszekreny.png"
    }
];


let aktualisIndex = 0;
let kosarDb = 0;


function updateView() {
    const termek = termekek[aktualisIndex];

    document.querySelector("#t-kep").src = termek.kep;
    document.querySelector("#t-cim").innerText = termek.cim;
    document.querySelector("#t-leiras").innerText = termek.leiras;
    
    document.querySelector("#t-ar").innerText = termek.ar.toLocaleString('hu-HU') + " Ft";
}

function changeProduct(irany) {
    aktualisIndex += irany;

    if (aktualisIndex < 0) {
        aktualisIndex = termekek.length - 1;
    }
    else if (aktualisIndex >= termekek.length) {
        aktualisIndex = 0;
    }

    updateView();
}

function addToCart() {
    kosarDb++; 
    
    document.querySelector("#kosarbanszam").innerText = kosarDb;
    
    alert("A(z) " + termekek[aktualisIndex].cim + " bekerült a kosárba!");
}

window.onload = function() {
    updateView();
};