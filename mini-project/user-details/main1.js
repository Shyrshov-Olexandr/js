// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//   6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
let url = new URL (location.href);
const id = url.searchParams.get('data');
const container = document.createElement('div');
container.classList.add('allInfoCont');
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('allInfoButt')
document.body.append(container, buttonDiv);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(value => value.json())
  .then(value => {
    for (const user in value) {

      const userDiv = document.createElement('div');
      userDiv.classList.add('allInfoUsDiv')
      if (typeof value[user] !== 'object'){

        userDiv.innerHTML = `<b>${user}</b> : ${value[user]}`;
      } else {

        userDiv.innerHTML = `<b>${user.toUpperCase()}</b> :`;

        for (const userKey in value[user]) {
          const userInnerDiv = document.createElement('div');
          userInnerDiv.classList.add('allInfoUsInDiv');
          if (typeof value[user][userKey] !== 'object'){
            userInnerDiv.innerHTML = `<b>${userKey}</b> : ${value[user][userKey]}`
          } else {
            userInnerDiv.innerHTML = `<b>${userKey.toUpperCase()}</b> :`;

            for (const element in value[user][userKey]) {
              const divElement = document.createElement('div');
              divElement.classList.add('allInfoDivElem');
              if (typeof value[user][userKey][element] !== 'object'){
                divElement.innerHTML = `<b>${element}</b> : ${value[user][userKey][element]}`;
              }
            }
          }
          userDiv.append(userInnerDiv);
        }
      }
      container.append(userDiv);
    }

  })


const button = document.createElement('button');
button.classList.add('buttonClass')
const anchor = document.createElement('a');
anchor.innerHTML = `<b>Posts of current user</b>`
button.append(anchor);
button.onclick = () => {
  button.style.visibility = 'hidden';
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(value => value.json())
    .then(posts => {

      for (const item of posts) {
        const posts = document.createElement('div');
        posts.classList.add('postsCont')
        document.body.append(posts);

        const postsDiv = document.createElement('div');
        postsDiv.classList.add('postDivStyle');

        const postsDivTitle = document.createElement('div');
        postsDivTitle.classList.add('postDivElemStyle');

        const postsDivBody = document.createElement('div');
        postsDivBody.classList.add('postDivElemStyle');

        const commentButton = document.createElement('button');
        commentButton.classList.add('postDivButtonStyle');
        const postsDivA = document.createElement('a');
        postsDivTitle.innerHTML = `<b> Post ${item.id} </b> : ${item.title}`;
        postsDivA.innerHTML = `Comments`;
        commentButton.append(postsDivA);
        commentButton.onclick = () => {
          postsDivA.href = `/js/mini-project/post-details/post-details.html?data=${item.id}`;

        }


        postsDivBody.innerText = `${item.body}`;
        postsDiv.getElementsByClassName('postStyle');
        postsDiv.append(postsDivTitle, postsDivBody, commentButton)
        posts.append(postsDiv);

      }
    })
}

buttonDiv.append(button);
