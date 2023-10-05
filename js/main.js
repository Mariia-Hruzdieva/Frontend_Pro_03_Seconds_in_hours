let hours = +prompt('Введіть кількість годин');
if (isNaN(hours)) {
    alert('Значення не є числом');
} else {
    const sec = (hours * 3600);
    alert('Кількість секунд = ' + sec)
}