-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 30 2020 г., 13:22
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `subjects`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tester`
--

CREATE TABLE `tester` (
  `id` int(11) NOT NULL,
  `caption` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `time` int(11) DEFAULT NULL,
  `quetions` text NOT NULL,
  `class` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tester`
--

INSERT INTO `tester` (`id`, `caption`, `subject`, `time`, `quetions`, `class`) VALUES
(1, 'Перша світова війна', 'Історія', NULL, 'Початок першої світової^Кінець першої світової^Країни учасники^Причина війни^Наслідки війни', 10),
(2, 'Excel', 'Інформатика', 20, 'Многомірний масив^Методи розв\'язування систем рівнянь^Назва клітинки^Функція сума^Функція підрахунку', 8),
(3, 'Квадратична функція', 'Алгебра', NULL, '5 + 5 = ^(2+4)/2 + 123 = ^ (123 + 12 + 2)*2/5', 9),
(4, 'Python', 'Програмування', 10, 'Якою командою вивести масив^Як ввести дані^Як вивести дані', 10);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tester`
--
ALTER TABLE `tester`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tester`
--
ALTER TABLE `tester`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
