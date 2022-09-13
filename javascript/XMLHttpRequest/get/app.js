window.addEventListener('load', ()=>{
    // GET REQUEST
    req = new XMLHttpRequest()
    req.open('GET', 'https://reqres.in/api/users?page=2')
    req.send()

    // load request
    req.addEventListener('load', ()=>{
        // console.log(req.response)
        let responseData = JSON.parse(req.response)
        // console.log(responseData)
        let users = responseData.data
        // console.log(users)

        // variables
        const usersList = document.querySelector('ul#users')

        // loop all users
        users.forEach((user)=>{
            const newChild = document.createElement('li')
            let innerChild = `
                <img src="${user.avatar}" alt="${user.first_name}" />
                <h3 class="name">${user.first_name} ${user.last_name}</h3>
                <a href="mailto:${user.email}" class="mail">${user.email}</a>
            `
            newChild.innerHTML = innerChild
            usersList.appendChild(newChild)
        })
    })

    // handling errors

    // 1. using request current stage
    req.addEventListener('readystatechange', ()=>{
        console.log(req.readyState)
        if (req.readyState == 4){
            console.log('status: ',req.status)
            if (req.status != 200){
                console.error('Error happened')
            }
        }
    })

    // 2. using request error eventListner method
    req.addEventListener('error', (err)=>{
        console.log(err)
    })

    // POST REQUEST
    let form = document.querySelector("form")
    let loginReq = new XMLHttpRequest()
    let method = form.getAttribute('method')
    let action = form.getAttribute('action')

    let email = document.getElementById('id_email').value
    let password = document.getElementById('id_password').value


    // console.log(method, action)

    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        loginReq.open(method, action)
        loginReq.setRequestHeader("Content-Type", "application/json")
        loginReq.send(JSON.stringify({
            "email": email,
            "password": password
        }))
    })
})