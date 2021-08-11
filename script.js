/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы.

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;



function start() {
    numberOfFilms = +prompt("'Сколько фильмов вы уже посмотрели?'", "10");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("'Сколько фильмов вы уже посмотрели?'", "10");
    } 
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        let film = prompt('Один из последних просмотренных фильмов?', 'Logan'),
            rating = prompt('На сколько оцените его?', '8.1');
        if ((film && rating != '') && (film && rating != null) && (film.length <= 50)) {
            personalMovieDB.movies[film] = rating;
            console.log('Done');
        } else {
            i--;
            console.log('Error');
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

detectPersonalLevel();