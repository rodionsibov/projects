const makePizza = function (title, cb) {
 console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`); 
 setTimeout(cb, 6000);
}

const readBook = function () {
 console.log('Читаю книгу «Колдун и кристалл»…');
}

const eatPizza = function () {
  console.log('Ура! Пицца готова, пора подкрепиться.');
}

makePizza('Пеперонни', eatPizza);
readBook();
