/**
 * Конвертер температур
 */
// Запрашиваем ввод
const celsius = parseFloat(prompt("Введите градусы в цельсиях"));

//Проверяем, что ввели число
if (isNaN(celsius)) {
	alert('Ошибка: нужно ввести число');
} else {
	//Считаем Фаренгейты
	const fahrenheit = (celsius * 9/5) + 32;
	//Выводим результат
	alert(`${celsius}°C = ${fahrenheit}°F`);
}


/**
 * Проверка возраста. Используем цикл do while, пока пользователь не введет правильное число
 */
let age;

do {
	age = parseInt(prompt("Введите ваш возраст от 1 до 100:"));

	if (isNaN(age)) {
		alert("Это не число!");
	} else if (age < 1 || age > 100) {
		alert("Число должно быть от 1 до 100!")
	}
} while (isNaN(age) || age < 1 || age > 100);

alert(`Отлично! Ваш возраст ${age}`);

