'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function (){
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
	},
	detectPersonalLevel :function (){
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count >=30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		};
	},
	showMyBD: function (hidden){
		if (!hidden){
			console.log(personalMovieDB);
		}
	},
	toggleVisibibleMyDB: function () {
		if(personalMovieDB.privat){
			personalMovieDB.privat = false
		} else {
			personalMovieDB.privat = true
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++){
			let genre = prompt(`Ваш любимый фильм под номером ${i}`);
			if (genre === `` || genre === null){
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;}
			};
		
			personalMovieDB.genres.forEach ((item, i) => {
				console.log(`Любимый жанр ${i + 1} - это ${item}`);
			})

		
	}
	


};	


//personalMovieDB.start ();
//personalMovieDB.rememberMyFilms ();
//personalMovieDB.detectPersonalLevel ();
//personalMovieDB.showMyBD (personalMovieDB.privat);
//personalMovieDB.toggleVisibibleMyDB ();
//personalMovieDB.writeYourGenres ();

console.log(personalMovieDB);









/*
let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();
*/



/*
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

	rememberMyFilms()
	*/



	/*
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

	detectPersonalLevel();
	*/



	/*
	
	function showMyBD (hidden){
		if (!hidden){
			console.log(personalMovieDB);
			
		}
	};

	showMyBD (personalMovieDB.privat);
	*/



	/*
	function writeYourGenres () {
		for (let i = 1; i <= 3; i++){
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый фильм под номером ${i}`);
		}
	};

	writeYourGenres ();

*/