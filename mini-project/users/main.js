// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
let container = document.createElement('div');
container.classList.add("conStyle");
document.body.append(container);
let buttonDiv = document.createElement('div');
buttonDiv.classList.add('buttonDivStyle')
container.append(buttonDiv);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(value => value.json())
  .then(value => {
    for (const item of value) {
      const userDiv = document.createElement('div');
      userDiv.innerText = `${item.id} : ${item.name}`;
      userDiv.classList.add ('userDivStyle')
      container.append(userDiv);

      const button = document.createElement('button');
      button.classList.add('buttonStyle')
      const anchor = document.createElement('a');
      anchor.innerText = `All information`
      button.append(anchor);
      button.onclick = () => {
        anchor.href = `/js/mini-project/user-details/user-details.html?data=${item.id}`;

      }
      container.append(button);

    }
  })



// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//   user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//   блоки з короткою іфною про post - в ряд по 5 .
//   post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//   Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
