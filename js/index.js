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
        '<span class="mt-2">Какая игра изображена на картинке?</span>' +
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

    // Выводим новый вопрос
    $('#kwizadiumContainer').html('<h5> Чем занимается твой парень Никита?</h5>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Строит автоматизированные системы</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Бухает постоянно</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Пишет сайтики</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"  id="qr"> <span class="ms-2">Разрабатывает технологические решения для бизнеса</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Оптимизирует вычислительные программные мощности</span></div>' +
        '</div>');
    $('#nextQButton').attr('onclick', 'fourQ()');
}

function fourQ() {
    // Проверка 3 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }

    // Выводим 4 вопрос
    $('#kwizadiumContainer').html('<img src="../kwizadium/media/q-4.jpg" alt="" class="rounded" style="width: 350px">' +
        '<span class="mt-2">Если бы вам нужно было приручить это животное, на какой карте вы бы начали свои поиски?</span>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Abbertation</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">Genesis</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Island</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Genesis 2</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Scorched Earth</span></div>' +
        '</div>');

    $('#nextQButton').attr('onclick', 'fiveQ()');
}

// 5 вопрос
function fiveQ() {
    // Проверка 4 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }

    // Выводим 5 вопрос
    $('#kwizadiumContainer').html('<h5>В функции комплекса Гольджи не входит...</h5>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">сортировка белков по различным транспортным пузырькам</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">гликозилирование белков</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">реутилизация мембран секреторных гранул после экзоцитоза </span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">упаковка секреторного продукта </span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">синтез стероидных гормонов</span></div>' +
        '</div>');
    $('#nextQButton').attr('onclick', 'sixQ()');
}

// 6 вопрос
function sixQ() {
    // Проверка 5 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }

    // Выводим 6 вопрос
    $('#kwizadiumContainer').html('<img src="../kwizadium/media/q-6.jpeg" alt="" class="rounded" style="width: 350px">' +
        '<span class="mt-2">Как называется этот инструмент?</span>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Это не инструмент, а прибор</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Автомобильный болторез</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Трансформаторный резистор</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">Домкрат</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Транспондер</span></div>' +
        '</div>');

    $('#nextQButton').attr('onclick', 'sevenQ()');
}


// 7 вопрос
function sevenQ() {
    // Проверка 6 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }

    // Выводим 7 вопрос
    $('#kwizadiumContainer').html('<h5>Если бы ты научилась говорить на языке котов, то какой бы самый очевидный вопрос спросила бы в первую очередь?</h5>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Вам не жарко?</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Почему вам нравится кушать стремные камушки?</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">Какого хрена ты спишь в моих вещах?</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Ничего бы не спрашивала, пошла бы спать </span></div>' +
        '</div>');
    $('#nextQButton').attr('onclick', 'eightQ()');

}

// 8 вопрос
function eightQ () {
    // Проверка 7 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }

    // Выводим 8 вопрос
    $('#kwizadiumContainer').html('<h5>Как называется функция, которая не имеет явной инициализации и выполняется без выделения дополнительной памяти?</h5>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">Лямбда функция</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Функция Сатуро Годжи</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Функция Геральда Гремберга</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Z-Y-F Функция </span></div>' +
        '</div>');
    $('#nextQButton').attr('onclick', 'nineQ()');
}

// 9 вопрос
function nineQ () {
    // Проверка 8 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }

    // выводим 9 вопрос
    $('#kwizadiumContainer').html('<img src="../kwizadium/media/q-9.jpg" alt="" class="rounded" style="width: 350px">' +
        '<span class="mt-2"> По какой из траектории (A) или (Б) вам разрешено выполнить поворот? </span>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Я не хочу поворачивать</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Только по А</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">Только по Б</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Поворот разрешен в обоих случаях</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Я пешком хожу</span></div>' +
        '</div>');

    $('#nextQButton').attr('onclick', 'tenQ()');
}


// 10 вопрос
function tenQ () {
    // Проверка 10 вопроса
    if (+$('#qr').is(':checked')) {
        kwizFlag = kwizFlag * true;
    } else {
        kwizFlag = kwizFlag * false;
    }

    $('#kwizadiumContainer').html('<h5>Кто является исполнителем этой строчки "моя любовь как твое сердце, мне бы тобою согреться, на пути между нами только герцы"?</h5>' +
        '<div class="mt-4">' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Nelly Mes</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">Polnalubvy</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check"> <span class="ms-2">50 seconds to mars</span></div>' +
        '<div class="d-flex flex-row"><input type="checkbox" class="kwiz-check" id="qr"> <span class="ms-2">Никита Star</span></div>' +
        '</div>');
    $('#nextQButton').attr('onclick', 'checkKwiz()');
}

function checkKwiz () {
    if (kwizFlag) {
        $('#kwizadiumContainer').html('' +
            '<h5> Поздравляю! Ты ответила правильно на все вопросы и получаешь ценную подсказку на пути к своему подарку. Ищи помощь</h5>' +
            '<span>Подсказка: тебе нужно найти qr код в системе</span>');
        $('#nextQButton').remove();
    } else {
        $('#kwizadiumContainer').html('<h5> Неудача! К сожалению ты допустила одну или несколько ошибок при прохождении квиза... Попробуй еще</h5>');
        $('#nextQButton').attr('onclick', 'restartKwiz()');
        $('#nextQButton').text('начать заново');
    }
}


function restartKwiz () {
    console.log('sfs')
}