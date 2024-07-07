/* Class Movie 
Three properties (title,studio,rating)

a) write constructor which takes (title, studio, rating as arguments)

b) set the class property "rating" to "PG" as default when no rating is provided

c) write method getPG() takes array of base type movie as arguments, returns new array of only those movies 
in input array with a rating of "PG"

d) create instance of class movie with title, studio and rating ("Casino Royale","Eon Productions","PG13")*/




class movie
{

    //a) write constructor which takes (title, studio, rating as arguments)

    //b) set the class property "rating" to "PG" as default when no rating is provided

    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

   // c) write method getPG() takes array of base type movie as arguments, returns new array of only those movies 
   //in input array with a rating of "PG"

    static getPG(input) {
        let PGmovies = input.filter(movie => movie.rating === "PG");
        return PGmovies;
    }
}

//d)create instance of class movie with title, studio and rating ("Casino Royale","Eon Productions","PG13")

const movie1 = new movie("Casino Royale","Eon Productions","PG13");


const movie2 = new movie("Golden Eye","Eon Productions");
const movie3 = new movie("Spectre", "Eon Productions","R")
const movie4 = new movie("Sky Fall", "Eon Productions", "G");
const movie5 = new movie("Quantum of Solace", "Eon Productions", "NC17");

let movieCollection = [movie1,movie2,movie3,movie4,movie5];

let pgratedMovies = movie.getPG(movieCollection);



//d) create instance of class movie with title, studio and rating ("Casino Royale","Eon Productions","PG13")
//output:
//movie {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}

console.log(movie1);

//b) set the class property "rating" to "PG" as default when no rating is provided
//Input: const movie2 = new movie("Golden Eye","Eon Productions");
//output:
//movie {title: 'Golden Eye', studio: 'Eon Productions', rating: 'PG'}

console.log(movie2);

//a) write constructor which takes (title, studio, rating as arguments)
//output:
//movie {title: 'Spectre', studio: 'Eon Productions', rating: 'R'}

console.log(movie3);


//c) write method getPG() takes array of base type movie as arguments, returns new array of only those movies 
//in input array with a rating of "PG"
//output:
//movie {title: 'Golden Eye', studio: 'Eon Productions', rating: 'PG'}

console.log(pgratedMovies);



