import "./import/modules";
import "./import/components";

// Функция для выполнения запроса к PHP-скрипту
function fetchData() {
  fetch("http://haikin.me/php/database_connector.php", {
    method: "POST", // Метод запроса
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Выводим ответ в консоль
    })
    .catch((error) => console.error("Ошибка:", error));
}

// Вызываем функцию для выполнения запроса
fetchData();
