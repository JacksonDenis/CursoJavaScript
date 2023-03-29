const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "nike" } , { nome: "Adidas"}],
    secret: 12345,
    n: 5,
    link: {a: "a", b:{ c: "C"}},
};

const { tamanho, estoque, marcas } = Tenis

console.log(tamanho, estoque, marcas);

const {secret: rondomNumber , n= avaliacoes} = Tenis

