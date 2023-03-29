let Tenis = {
    tamanho: 45,
    estoque: true,
};
let link = {link: {a: "a", b:{ c: "C"}}};

let clone1 = Tenis;

let mesclar1 = Object.assign(Tenis, link);

let mesclar2 = {...Tenis, ...link}