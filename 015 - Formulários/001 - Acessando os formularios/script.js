const form = document.forms.namedItem("registration");

form.addEventListener ('submit', (event) => {
    event.preventDefault();
    const name = form.name    
    const password = form.password

    console.log(name, password);
})