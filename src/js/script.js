"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('что последнее вы посмотрели?' , ''),
      b = prompt('на сколько вы оценили бы его', ''),
      c = prompt('то последнее вы посмотрели?', ''),
      d = prompt('на сколько вы оценили бы его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);