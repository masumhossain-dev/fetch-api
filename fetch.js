const loadPosts ='https://jsonplaceholder.typicode.com/posts'
fetch(loadPosts).then(res => res.json()).then(data => displayPosts(data))


function displayPosts(posts){
   const postContainer = document.getElementById('post-container');
   for(const post of posts){
      const div = document.createElement('div');
      div.classList.add('posts')
      div.innerHTML =`
      <h4>User- ${post.userId}</h4>
      <h5>Post-title: ${post.title}</h5>
      <p>${post.body}</p>
      `
      postContainer.appendChild(div);
   }
}