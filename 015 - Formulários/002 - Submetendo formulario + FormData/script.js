const form = document.forms.namedItem("registration");

form.addEventListener ('submit', (event) => {
    event.preventDefault();
    let name = form.name
    let password = form.password

    const formData = new FormData(form);

    formData.forEach((res) => {
        console.log(res);
    })

    console.log(formData.get("name"));
    console.log(formData.get("password"));



    /* if (name && password) {
        console.log(name, password);
        form.submit
        
    } */
})