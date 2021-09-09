// function aoCubo(numero) {
//     return numero * numero * numero
// }

// const numero = 3
// const resultado = aoCubo(numero)

// console.log("O quadrado de " + numero + " é " + resultado)

// const veiculos = {
//     rodas: 4,
//     lugares: 5,
//     marca: "Volkswagen",
//     modelos: "gol",
//     cor: "#FFF"
// }


const livro = require("./livraria.json")
let fs = require('fs');

//onsole.log(livro[1].titulo, livro[1].preco)

fs.readFile("./livraria.json", 'novo textto', function (err) {
    if (err) {
        return console.log("ERRO")
    }

    console.log("Arquivo craido")
})


// IF ternario


// idade = Math.floor(Math.random() * 99)

// if (idade < 19) {
//     console.log("Não pode beber" + idade)
// } else {
//     console.log("Não pode beber" + idade)
// }

// idade < 18 ? console.log("Não pode beber" + idade) : console.log("Pode beber" + idade) 


// let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']



// let china = destinosIncriveis[3];

// let bariloche = destinosIncriveis[1];

// console.log(bariloche)

// console.log(china)

