const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "nike" } , { nome: "Adidas"}],
    secret: 12345,
    n: 5,
    link: {a: "a", b:{ c: "C"}},
};
//"tamanho" in Tenis
if (Tenis.hasOwnProperty("tamanho")) {
    console.log("Existe tamanho");
} else {
    console.log("No existe");
}