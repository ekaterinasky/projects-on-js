while (true) {
  // Запрос первого числа
  const num1Input = prompt("Введите первое число:");
  if (num1Input === null) {
    alert("Вы отменили ввод");
    break;
  }
  const num1 = parseFloat(num1Input);

  // Запрос операции
  const operation = prompt("Выберите операцию +, -, *, /, **, %");
  if (operation === null) {
    alert("Вы отменили операцию");
    break;
  }

  // Запрос второго числа
  const num2Input = prompt("Введите второе число:");
  if (num2Input === null) {
    alert("Вы отменили ввод");
    break;
  }
  const num2 = parseFloat(num2Input);

  const validOperations = ['+', '-', '*', '/', '**', '%'];

  // Проверка корректности ввода
  if (isNaN(num1) || isNaN(num2) || !validOperations.includes(operation)) {
    alert("Ошибка! Вы ввели недопустимые символы!");
    continue; // Начинаем цикл заново
  }

  // Выполнение операций
  if (operation === '+') {
    alert(`✅ Результат: ${num1} ${operation} ${num2} = ${num1 + num2}`);
  }
  else if (operation === '-') {
    alert(`✅ Результат: ${num1} ${operation} ${num2} = ${num1 - num2}`);
  }
  else if (operation === '*') {
    alert(`✅ Результат: ${num1} ${operation} ${num2} = ${num1 * num2}`);
  }
  else if (operation === '/') {
    if (num2 === 0) {
      alert("❌ Ошибка! На ноль делить нельзя!");
    } else {
      alert(`✅ Результат: ${num1} ${operation} ${num2} = ${num1 / num2}`);
    }
  }
  else if (operation === "**") {
    alert(`✅ Результат: ${num1} ${operation} ${num2} = ${num1 ** num2}`);
  }
  else if (operation === "%") {
    alert(`✅ Результат: ${num1} ${operation} ${num2} = ${num1 % num2}`);
  }

  // Подтверждение продолжения
  const shouldContinue = confirm("Хотите сделать ещё одно вычисление?");
  if (!shouldContinue) {
    break;
  }
}
