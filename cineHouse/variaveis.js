// const CONDICAO = true;

// if (CONDICAO) {
//     var texto = "ola";

// }

// console.log(texto);


function testeVar() {
    if (true) {
        var minhaVariavel = 2;
        console.log("Aqui eu existo?" + (typeof minhaVariavel != undefined ? "Sim" : "Não"));
    }
    console.log("Aqui eu existo?" + (typeof minhaVariavel != undefined ? "Sim" : "Não"));
}

testeVar();
console.log("Aqui eu existo?" + (minhaVariavel ? "Sim" : "Não"));