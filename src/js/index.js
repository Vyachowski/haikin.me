import "./import/modules";
import "./import/components";

// Получение текущего URL-адреса страницы
const currentURL = window.location.href;

// Формирование URL-адреса для PHP-скрипта
const phpScriptURL = currentURL.replace(
  "index.html",
  "backend/database_connector.php"
);

// Выполнение запроса к PHP-скрипту
fetch(phpScriptURL)
  .then((response) => response.json())
  .then((data) => {
    const totalRows = data.totalRows;
    console.log(`Всего строк в базе данных: ${totalRows}`);
  })
  .catch((error) => console.error("Ошибка:", error));
