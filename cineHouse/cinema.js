let catalogo = [
    {
        codigo: 1,
        titulo: "A Hora do Rush",
        anoDeLancamento: 1998,
        duracao: 1.7,
        emCartaz: false,
        faturamento: 100000
    },
    {
        codigo: 2,
        titulo: "Velozes e Furiosos 9",
        anoDeLancamento: 2021,
        duracao: 2.5,
        emCartaz: true,
        faturamento: 5500000
    },
    {
        codigo: 3,
        titulo: "Homem aranha",
        anoDeLancamento: 2021,
        duracao: 2.5,
        emCartaz: true,
        faturamento: 0
    }
];


function adicionarFilmes(codigo, titulo, anoDeLancamento, filmeEstaEmCartaz) {
    catalogo.push({
        codigo,
        titulo,
        anoDeLancamento,
        emCartaz: filmeEstaEmCartaz,

    });
    console.log("Filem Adicionado");
    console.log(catalogo);
}

function buscarFilme() {

}


function alterarStatusEmCartaz() {

}


function listarTodosOsFilmes() {
    catalogo.forEach((item) => console.log(item.titulo + ", " + item.anoDeLancamento + ", Duração: " + item.duracao));
}

function listarTodosOsFilmesLongos() {
    let filmesLongos = catalogo.filter((item) => item.duracao > 2);
    filmesLongos.forEach((item) => console.log(item.titulo + ", " + item.anoDeLancamento + ", Duração: " + item.duracao));

}

function listaTodosOsFilmes2() {
    let filmeResumo = catalogo.map(item => {
        return {
            resumo: item.titulo + ", " + item.anoDeLancamento + ". Duração " + item.duracao,
            ...item
        }
    });
    filmeResumo.forEach(item = console.log(item.resumo))
}

function buscarFilmepeloCodigo(codigo) {
    let { titulo } = catalogo.find(item => item.codigo === codigo);
    console.log(titulo)
}

function calcularFaturamento() {
    //utilizar o reduce do array para calcular o total do faturamento
}


module.exports = {
    adicionarFilmes,
    buscarFilme,
    alterarStatusEmCartaz,
    listarTodosOsFilmes,
    listarTodosOsFilmesLongos,
    listaTodosOsFilmes2,
    buscarFilmepeloCodigo,
    calcularFaturamento

}

buscarFilmepeloCodigo(1)

