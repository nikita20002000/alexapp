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
    $('#driverRating').css('visibility', 'hidden');
    $('#infoRating').css('visibility', 'visible');
})

$('#getComplimentButton').on('click', function() {
    var compList = [
        'Ты просто шикарная',
        'Ты самая лучшая',
        'Ты прекрасна',
        'Ты великолепно',
        'Шикарно готовишь',
        'Классно выглядишь',
        'Умный врач',
        'Идеальный друг и девушка',
        'Мило ссоришься',
        'Уже выучила проценты',
        'Ты безумная',
        'Когда уже выучишь проценты??',
        'На этом уже все',
        'Что ты тут ищешь',
        'Ты безумная',
        'На сайте куча пасхалок',
        'Найди все пасхалки',
        'Йоу ты крутая',
        'С тобой рядом все становиться красивее и милее',
        'У тебя красивое лицо',
        'У тебя красивая фигура',
        'Улыбнись)))',
        'Я тебя люблю',
        'Учи проценты',
        'На сайте есть проценты',
        'Ты еще молода и у тебя все впереди',
        'У тебя все получится',
        'Я в тебя верю',
    ];

    $('#complimentsContainer').css('visibility', 'visible');
    $('#complimentsContainer span').text(compList[Math.floor(Math.random() * 29)]);

})


var kwizFlag = true;

// 1 Вопрос
$('#kwizadiumStartButton').on('click', function() {
    $('#hellKwiz').remove();
    $('#kwizadiumContainer').addClass('glass-container');
    $('#kwizadiumContainer').addClass('flex-column');
    $('#kwizadiumContainer').html('<img src="../kwizadium/media/q-1.jpg" alt="" class="rounded" style="width: 350px">' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">Demons Souls</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Elden Ring</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Ну это же ты в них играешь, откуда я знаю</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Mario Cart</span></div>' +
        '</div>');
    $('#nextQButton').css('visibility', 'visible');
    $('#nextQButton').attr('onclick', 'secondQ()');
})

// 2 Вопрос
function secondQ() {
    // Проверка 1 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }
    console.log(kwizFlag)

    // Выводим новый вопрос
    $('#kwizadiumContainer').html('<h5> В магизне проходит акция: при покупке двух платьев, каждое из которых стоит по 120 руб. скидка на каждое платье будет составлять 50%. Сколько будет стоить покупка двух платьев в магазине?</h5>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">О нет...</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">1000 рублей</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">120 рублей</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">210 рублей</span></div>' +
        '</div>');
    $('#nextQButton').attr('onclick', 'thirdQ()');
}

// 3 Вопрос
function thirdQ() {
    // Проверка 2 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }
    console.log(kwizFlag)
}