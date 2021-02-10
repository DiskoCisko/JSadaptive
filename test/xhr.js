/**
 * принимает логин и пароль юзера, создает HttpRequest в случае успеха проиходит переадресация
 * @param {string} username
 * @param {string} password
 */
function autUser() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.responseType = 'json';

    xhr.onload = function () {
      if (xhr.status !== 200) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send();
  });
}

$('#login').click(() => {
//   let username = $('#username')[0].value;
//   let password = $('#password')[0].value;
  autUser()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
})
