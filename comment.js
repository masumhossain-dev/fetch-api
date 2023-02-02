const loadComments = 'https://jsonplaceholder.typicode.com/comments'
fetch(loadComments).then(res => res.json()).then(data => displayData(data))

function displayData(comments){
   const commentContainer = document.getElementById('comment-container');
   for(const comment of comments){
      const div = document.createElement('div');
      div.innerHTML = `
      <h1>Name: ${comment.name}</h1>
      <h3>Email: ${comment.email}</h3>
      <p>Comment:- </br> ${comment.body}
      `
      commentContainer.appendChild(div);
   }
}