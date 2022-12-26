//   На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let url = new URL (location.href);
const id = url.searchParams.get('data');
const infoDiv = document.createElement('div');
infoDiv.classList.add('infoStyle');
document.body.append(infoDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then(value => value.json())
  .then(comments => {

    for (const item of comments) {
      const postsDiv = document.createElement('div');
      postsDiv.classList.add('postStyle');

      const commentTitle = document.createElement('div');
      commentTitle.classList.add('commentElem');

      const commentEmail = document.createElement('div');
      commentEmail.classList.add('commentElem');

      const commentBody = document.createElement('div');
      commentBody.classList.add('commentElem');

      commentTitle.innerHTML = `<b> Comment ${item.id} </b> : ${item.name}`;
      commentEmail.innerHTML = `<b> E-Mail </b> : ${item.email}`;
      commentBody.innerHTML = `${item.body}`;

      postsDiv.append(commentTitle,commentEmail,commentBody);
      infoDiv.append(postsDiv);

  }
})
