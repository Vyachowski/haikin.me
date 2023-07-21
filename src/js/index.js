import "./import/modules";
import "./import/components";

// Получение текущего URL-адреса страницы
const currentURL = window.location.href;

// Формирование URL-адреса для PHP-скрипта
const phpScriptURL = currentURL.replace(
  "index.html",
  "backend/database_connector.php"
);

// Функция для выполнения запроса к PHP-скрипту
function fetchData() {
  fetch(phpScriptURL, {
    method: "POST", // Метод запроса
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message); // Выводим сообщение из ответа в консоль
    })
    .catch((error) => console.error("Ошибка:", error));
}

// Вызываем функцию для выполнения запроса
fetchData();

// // Получение текущего URL-адреса страницы
// const currentURL = window.location.href;

// // Формирование URL-адреса для PHP-скрипта
// const phpScriptURL = currentURL.replace(
//   "index.html",
//   "backend/database_connector.php"
// );

// // Выполнение запроса к PHP-скрипту
// fetch(phpScriptURL)
//   .then((response) => response.json())
//   .then((data) => {
//     const totalRows = data.totalRows;
//     console.log(`Всего строк в базе данных: ${totalRows}`);
//   })
//   .catch((error) => console.error("Ошибка:", error));
