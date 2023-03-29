const pedidos = [

    {
        id: 420,
        nome: "Denner",
        alimento: "Sanduiche",
        bebida: "Suco limao",
        preco: 25
    },
    {
        id: 152,
        nome: "Naida",
        alimento: "Vegano",
        bebida: "Laranja",
        preco: 30
    },
    {
        id: 29,
        nome: "Marcio",
        alimento: "Coxinha",
        bebida: "Uva",
        preco: 27
    },
    {
        id: 33,
        nome: "Isabel",
        alimento: "Picanha",
        bebida: "Refri",
        preco: 26
    },
    {
        id: 55,
        nome: "Jose",
        alimento: "Pizza",
        bebida: "Refri",
        preco: 25
    },
]

const balancete = pedidos.reduce ((total, element) =>{
    return total + element.preco
}, 0 )

console.log(balancete);

