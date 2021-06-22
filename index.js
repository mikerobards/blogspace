// fetch("https://apis.scrimba.com/jsonplaceholder/todos", { method: "POST" })


// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Buy Milk",
//         completed: false
//     })
// }).then(res => res.json()).then(data => console.log(data))


const blogList = document.getElementById('blog-list')
let form = document.getElementById('new-post')
let title = form.elements['post-title']
let body = form.elements['post-body']



fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        console.log(postsArr)
        let html = ''
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        blogList.innerHTML = html
    })

form.addEventListener('submit', (e) => {
    // let title = form.elements['post-title']
    // let body = form.elements['post-body']
    // let postTitle = title.value
    // let postBody = body.value
    // console.log(`title: ${postTitle}; body: ${postBody}`)

    e.preventDefault()
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    // console.log(postTitle, postBody)
    const data = {
        title: postTitle,
        body: postBody
    }
    console.log(data)

})








