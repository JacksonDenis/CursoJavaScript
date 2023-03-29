const pedidos = [

    {
        id: 420,
        nome: "Denner",
        alimento: "Sanduiche",
        bebida: "Suco limao",
    },
    {
        id: 152,
        nome: "Naida",
        alimento: "Vegano",
        bebida: "Laranja",
    },
    {
        id: 29,
        nome: "Marcio",
        alimento: "Coxinha",
        bebida: "Uva",
    },
    {
        id: 33,
        nome: "Isabel",
        alimento: "Picanha",
        bebida: "Refri",
    },
    {
        id: 55,
        nome: "Jose",
        alimento: "Pizza",
        bebida: "Refri",
    },
]

pedidos.map((element, index) => {
    if(element.id === 29) {
        return (element.alimento = "kibe")
    }
})