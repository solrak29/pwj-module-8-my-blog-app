

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response) => {
        console.log('received posts');
        return response.json();
    }).then((data) => {
        console.log('build posts');
        buildPosts(data);
    });
}


const buildPosts = (blogPosts) => {
    let blogPostContent = "";
    for(blogPosts of blogPosts){
        const postDate = new Date(parseInt(blogPosts.added_date)).toDateString();
        const postImage = `${API_BASE_URL}${blogPosts.post_image}`;
        const postLink = `/post.html?id=${blogPosts.id}`;
        blogPostContent += `
        <a href="${postLink}">
        <div class="post">
             <div class="post-image" style="background-image: url(${postImage}">
             </div>
             <div class="post-content">
                 <div class="post-date">${postDate}</div>
                 <div class="post-title"><h4>${blogPosts.title}</h4></div>
                 <div class="post-text">
                     ${blogPosts.content}
                 </div>
             </div>
        </div>
        </a>
        `
        document.querySelector('.blog-post').innerHTML = blogPostContent;
    }

}