/**
 * Игра Угадай число
 */

//Загадываем число

const secretNumber = Math.floor(Math.random() * 100) +1;
let attempts = 0;
let guess;
let name = prompt("Как тебя зовут?") || "Игрок";
//Цикл для угадывания

while (true) {
	guess = parseInt(prompt(`${name}, угадай число от 1 до 100:`));

	//Проверка
	if (isNaN(guess)) {
		alert("Ошибка! Введите число!");
		continue;
	}

	attempts++;

	if (guess === secretNumber) {
		alert(`🎉 Поздравляю! ${name} Ты угадал число ${secretNumber} за ${attempts} попыток.`);
		break;
	} else if (attempts >= 10){
		alert(`😢 ${name} Ты проиграл! Загаданное число было ${secretNumber}.`);
		break;
	} else if (guess < secretNumber) {
		alert(`⬆️ Больше! Попытка ${attempts}` );
	} else if (guess > secretNumber) {
		alert(`⬇️ Меньше! Попытка ${attempts}`);
	}
}



