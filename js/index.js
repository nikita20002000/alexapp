$(document).ready(function() {
    var words = $('.word'); // Получаем все слова
    var index = 0; // Индекс текущего слова

    function showNextWord() {
        if (index < words.length) {
            $(words[index]).css({
                'opacity': 1, // Показываем текущее слово
                'transform': 'scale(1)' // Увеличиваем до нормального размера
            });
            setTimeout(function() {
                $(words[index]).css({
                    'opacity': 0, // Скрываем текущее слово
                    'transform': 'scale(0)' // Уменьшаем до 0
                });
                index++; // Переходим к следующему слову
                showNextWord(); // Рекурсивно вызываем функцию для следующего слова
            }, 2000); // Задержка перед скрытием (2 секунды)
        } else {
            $('#helloContainer').remove();
            $('.slide-down-button').css('visibility', 'visible');
            $('#mainImages').show();
        }
    }

    showNextWord(); // Запускаем показ слов
});

// Функция для прокрутки страницы вверх
window.onload = function() {
    window.scrollTo(0, 0); // Прокручиваем страницу в верхний левый угол
};