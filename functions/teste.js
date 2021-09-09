

function adicionarHttp(url) {
    return "http://" + url;
};

function processar(lista, adicionarHttp) {
    let listaSites = []
    for (let i = 0; i < lista.length; i++) {
        listaSites.push(adicionarHttp(lista[i]))
    }
    return listaSites
}


console.log(adicionarHttp(["google.com", "terra.com", "yahoo.com.br"]))

// let listaSites = []

// let adicionarHttp = listaSites.map(function (url) {
//     return ("http;//" + url)
// })

// console.log(adicionarHttp())


