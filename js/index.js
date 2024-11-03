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

$('.cutie-button').on('click', function() {
    var percent = Math.floor(Math.random() * 101); // Генерирует случайное число от 0 до 100
    $('#cutieResult h3').text(`Сегодня вы на ${percent}% милашка `);
    $('#cutieResult').css('visibility', 'visible');
})


// Создание цветочной поляны
$('#createFlowersButton').on('click', function() {
    for (let i = 0; i < 100; i++) {
        let pT = getPercentForAbs()
        let pD = getPercentForAbs()
        $('#flowersContainer').append(`<span class="flower-i" style="top: ${pT}%; left: ${pD}%">🌹</span>`);
        pT = getPercentForAbs();
        pD = getPercentForAbs();
        $('#flowersContainer').append(`<span class="flower-i" style="top: ${pT}%; left: ${pD}%">🌸</span>`);
        pT = getPercentForAbs();
        pD = getPercentForAbs();
        $('#flowersContainer').append(`<span class="flower-i" style="top: ${pT}%; left: ${pD}%">💐</span>`);
        pT = getPercentForAbs();
        pD = getPercentForAbs();
        $('#flowersContainer').append(`<span class="flower-i" style="top: ${pT}%; left: ${pD}%">🌺</span>`);
        pT = getPercentForAbs();
        pD = getPercentForAbs();
        $('#flowersContainer').append(`<span class="flower-i" style="top: ${pT}%; left: ${pD}%">🌷</span>`);
        pT = getPercentForAbs();
        pD = getPercentForAbs();
        $('#flowersContainer').append(`<span class="flower-i" style="top: ${pT}%; left: ${pD}%">🌻</span>`);
    }
})

function getPercentForAbs() {
    return Math.floor(Math.random() * 101); // Генерирует случайное число от 0 до 100
}


$("#goToTaxiButton").on('click', function() {
    $('#timeNow').text(new Date().getHours() + ':' + new Date().getMinutes());
});


$('.star').on('click', function() {
    $('#driverRating').hide(500);
    $('#infoRating').css('visibility', 'visible');
})