let ui = prompt('Vul getal in', 'Getal')
test(12, ui)
function test(getal, getal2) {
    document.write(getal + '\n')
    let tempGetal = getal
    getal = getal += 6
    document.write(tempGetal + ' + 6 = ' + getal + '\n')
    tempGetal = getal
    getal = getal * getal2
    document.write(tempGetal + ' * ' + getal2 + ' = ' + getal + '\n')
    tempGetal = getal
    getal = getal / 5
    document.write(tempGetal + ' / 5 = ' + getal + '\n')
    tempGetal = getal
    getal = getal -= 12
    document.write(tempGetal + ' - 12 = ' + getal + '\n')
}

let tafel = prompt('Welke tafel?', 'Tafel')
let hoeveelheid = prompt('Hoeveel keer?', 'Hoeveelheid')
tafels(tafel, hoeveelheid)
function tafels(tafel, hoeveelheid) {
    for (let hoeveelheidT = 0; hoeveelheidT <= hoeveelheid; hoeveelheidT++) {
        let antwoord = tafel * hoeveelheidT
        document.write(tafel + ' * ' + hoeveelheidT + ' = ' + antwoord + '\n')
    }
}