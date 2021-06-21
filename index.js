// fetch("https://apis.scrimba.com/jsonplaceholder/todos", { method: "POST" })

/**
 Challenge:
 
 GET a list of blog from the JSON Placeholder API.
 
 BaseURL: https://apis.scrimba.com/jsonplaceholder/
 Endpoint: /posts
 
 Since there's so many posts, let's limit the array to just 5 items.
 You can use the `.slice()` array method to just grab the first 5 objects
 from the data array that comes back from the API
 */

/**
Challenge:

With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
Hints: 
* Create a `div` in the HTML file to store these items
* Loop over the items creating a string of HTML elements you 
  can then put into the div with `innerHTML`
*/
const blogList = document.getElementById('blog-list')


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
        // postsArr.forEach(post => {
        //     container.innerHTML += `
        //     title: ${post.title} 
        //     <br>
        //     body: ${post.body}
        //     <br>
        //     <br>
        //     `
        // })
    })

