window.addEventListener('load', ()=>{
    // GET request
    fetch('https://reqres.in/api/users')
        .then((response)=>{
            // console.log(response);
            console.log("Status: ",response.status)
            return response.json()
        })
        .then((responseData)=>{
            console.log(responseData);
            let users = responseData.data

            const usersList = document.querySelector('ul.users')

            // loop all users
            users.forEach((user)=>{
                const newChild = document.createElement('li')
                newChild.classList.add('user')
                let innerChild = `
                    <img src="${user.avatar}" alt="${user.first_name}" />
                    <h3 class="name">${user.first_name} ${user.last_name}</h3>
                    <a class="email" href="mailto:${user.email}" class="mail">${user.email}</a>
                `
                newChild.innerHTML = innerChild
                usersList.appendChild(newChild)
            })
        })
        .catch((error)=>{
            console.log("Error: ",error)
            console.log("Error Mesage: "+error.message)
        })

        // POST request
        const form = document.querySelector('form')
        let method = form.getAttribute('method')
        let action = form.getAttribute('action')

        form.addEventListener('submit', ()=>{
            let email = document.querySelector('#email').value
            let password = document.querySelector('#password').value

            fetch(action, {
                method: method,
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                return response.json()
            })
            .then((responseData)=>{
                console.log(responseData)
            })
        })
})