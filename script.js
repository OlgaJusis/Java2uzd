let asmuoNR1 = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 32,
    pilietybe: 'Lietuva',
    arNuolatGyvenaLT: 'taip',
    KiekDienuYraLt: 'daug',
}
console.log(asmuoNR1)

let asmuoNR2 ={
    vardas: 'John',
    pavarde: 'Smith',
    amzius: 36,
    pilietybe: 'Jungtine Karalyste',
    arNuolatGyvenaLT: 'ne',
    KiekDienuYraLt: 44,
} ;

let asmuoNR3 ={
    vardas: 'Jose',
    pavarde: 'Garcia',
    amzius: 11,
    pilietybe: 'Ispanija',
    arNuolatGyvenaLT: 'ne',
    KiekDienuYraLt: 16,
} ;

let asmuoNR4 ={
    vardas: 'Ivan',
    pavarde: 'Smirnoff',
    amzius: 45,
    pilietybe: 'Rusija',
    arNuolatGyvenaLT: 'ne',
    KiekDienuYraLt: 29,
} ;

let asmuoNR5 ={
    vardas: 'Ian',
    pavarde: 'Nowak',
    amzius: 30,
    pilietybe: 'Lenkija',
    arNuolatGyvenaLT: 'ne',
    KiekDienuYraLt: 45,
} ;


if (asmuoNR5.amzius >= 18) {
    console.log ('asmuo yra pilnametis')
} else { 
    console.log ("asmuo yra nepilnametis")
}

if (asmuoNR5.pilietybe === 'Lietuva') {
    console.log ('asmuo yra Lietuvos pilietis')
} else {
    console.log ('asmuo nera Lietuvos pilietis')
}

if (asmuoNR5.pilietybe === 'Lietuva') {
    console.log ('asmuo gyvena Lietuvoje ilgiau negu 30 d')
} else if (asmuoNR5.KiekDienuYraLt >= 30) {
    console.log ('asmuo gyvena Lietuvoje ilgiau negu 30 d')
} else {
    console.log ('asmuo gyvena LIetuvoje maziau negu 30 d')
}