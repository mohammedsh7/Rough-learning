window.addEventListener('load', ()=>{
    posts = [
        {
            "id": 1,
            "title": "Hello world",
            "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quia."
        },
        {
            "id": 2,
            "title": "Hello world 2",
            "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quia."
        }
    ]

    function viewPosts(){
        setTimeout(()=>{
            let html_content = ""
            posts.map((post)=>{
                html_content += `
                    <h1>${post.title}</h1>
                    <p>${post.body}</p>
                `
            })
            document.body.innerHTML = html_content
        }, 1000)
    }

    function createPost(post, callback){
        setTimeout(()=>{
            posts.push(post)
            callback()
        }, 2000)
    }


    let post = {
        "id": 3,
        "title": "Hello world 3",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quia."
    }

    createPost(post, viewPosts)

})