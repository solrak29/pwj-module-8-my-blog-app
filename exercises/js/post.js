/**
 * DONE (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts_by_id/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    console.log(urlParam.get("id"));
    return urlParam.get("id");
}

const getPost = () => {
    const postId = getPostIdParam();
    // CODE GOES HERE
    url = new URL(API_URL);
    params = {id: postId};
    url.search = new URLSearchParams(params);
    
     fetch(url, {
        method: 'GET',
    }).then((response) => {
        console.log('received posts');
        return response.json();
    }).then((data) => {
        console.log('build posts');
        console.log(data);
        buildPost(data);
    });
}

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string 
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${data.post_image}`;
    document.getElementById('individual-post-title').innerText = data.title;
    document.getElementById('individual-post-date').innerText = postDate;
    document.getElementById('individual-post-content').innerText = data.content;
}

