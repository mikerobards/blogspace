// fetch("https://apis.scrimba.com/jsonplaceholder/todos", { method: "POST" })


// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Buy Milk",
//         completed: false
//     }),
//     headers: {
//         'Content-type': 'application/json'
//     }
// }).then(res => res.json()).then(data => console.log(data))


const blogList = document.getElementById('blog-list')
const form = document.getElementById('new-post')
// let title = form.elements['post-title']
// let body = form.elements['post-body']
const titleField = document.getElementById('post-title')
const bodyField = document.getElementById('post-body')
let postsArray = []

// console.log(postTitle, postBody)


function renderPosts() {
    let html = ''
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    blogList.innerHTML = html


}




fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()

    })

form.addEventListener('submit', (e) => {
    // let title = form.elements['post-title']
    // let body = form.elements['post-body']
    // let postTitle = title.value
    // let postBody = body.value
    // console.log(`title: ${postTitle}; body: ${postBody}`)

    e.preventDefault()
    const postTitle = titleField.value
    const postBody = bodyField.value
    const data = {
        title: postTitle,
        body: postBody
    }

    console.log(data)

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            // titleField.value = ''
            // bodyField.value = ''
            form.reset()
        })
})








