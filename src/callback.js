function prepararBolo(callbackMassaPronta, callbackBoloPronto) {
    console.log("Batendo a massa...")
    console.log("Massa indo ao forno")
    callbackMassaPronta();
    console.log("Preparando o recheio")
    console.log("Recheio pronto")
    callbackBoloPronto();

}

function meuBoloEstaPronto() {
    console.log("Bolo Pronto")
}

prepararBolo(() => console.log("Massa Pronta redonda "), meuBoloEstaPronto);
prepararBolo(() => console.log("Massa Pronta quadrad "), meuBoloEstaPronto);