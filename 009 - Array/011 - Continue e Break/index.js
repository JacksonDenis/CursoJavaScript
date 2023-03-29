//para a interação

const myArrayObj = [
{
    nome:"Nay ",
    sobrenome: "Troquatte ",
},
{
    nome:"Jackson ",
    sobrenome: " Dennis",
},
{
    nome:"José ",
    sobrenome: "Denis ",
},
    
]

for (let item of myArrayObj){
    if (item.nome === "Nay") {
        console.log("Estou te esperando");
        continue
    }

    if (item.nome === "José") {
        console.log("Final");
        break;        
    }
}