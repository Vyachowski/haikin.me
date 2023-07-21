<?php
// Подключение к базе данных MySQL
include '../backend/database_access.php';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

// Выполнение запроса для получения количества строк в таблице
$sql = "SELECT COUNT(*) as total FROM total_coding_time";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $totalRows = $row['total'];

    // Формируем ответ в формате JSON
    $response = array('totalRows' => $totalRows);
    echo json_encode($response);
} else {
    $errorResponse = array('error' => "Нет данных в таблице.");
    echo json_encode($errorResponse);
}

// Закрываем соединение с базой данных
$conn->close();
?>