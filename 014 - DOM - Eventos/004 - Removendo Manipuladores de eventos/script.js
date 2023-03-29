const btn = document.querySelector("button")

const acionarAlert = () => {
    let validador = false
    alert (123)
    validador = true
}

if(validador){
    btn.addEventListener("click", acionarAlert);

}
