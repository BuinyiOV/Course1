/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

/*

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '');

const filmRate = +prompt('На сколько оцените его?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {lastWatchedFilm, filmRate},
	actors: {},
	genres: [],
	privat: false
};

console.log(numberOfFilms);

console.log(lastWatchedFilm);

console.log(filmRate);

console.log(personalMovieDB );

*/



//ВАРІАНТ 2 ЗА ЗРАЗКОМ

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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

/*
const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = +prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = +prompt('На сколько оцените его?', '');
	*/

	

	function rememberMyFilms(){
		for (let i = 1; i < 3; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''). trim(),
					b = +prompt('На сколько оцените его?', '');
	
					if (a !='' && b !='' && a != null && b != null && a.length < 50) {
						personalMovieDB.movies[a] = b; //якщо personalMovieDB.movies.a = b; - не працюватиме кирилиця і пробіл та деякі браузери
					} else {
						console.log('Error');
						i--;
					};
		};
	};

	//rememberMyFilms()

	

	function detectPersonalLevel(){
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count >=30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		};
	};

	//detectPersonalLevel();

	function showMyBD (hidden){
		if (!hidden){
			console.log(personalMovieDB);
			
		}
	};

	//showMyBD (personalMovieDB.privat);

	function writeYourGenres () {
		for (let i = 1; i <= 3; i++){
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый фильм под номером ${i}`);
		}
	};

	writeYourGenres ();

console.log(personalMovieDB);

/*
	personalMovieDB.movies[a] = b; //якщо personalMovieDB.movies.a = b; - не працюватиме кирилиця і пробіл та деякі браузери
	personalMovieDB.movies[c] = d;
	*/	