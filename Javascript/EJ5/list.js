let list = ["Tomato", "Potato", "Carrot", "Cucumber", "Onion"];
list.push("Aceite de Girasol")
list.pop()
let movies=[
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        date: new Date(2011, 10, 14),
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        date: new Date(2005, 3, 24),
    },
    {
        title: "The Godfather: Part II",
        director: "Francis Ford Coppola",
        date: new Date(2021, 12, 24),
    }
]
let movies2=movies.filter(movie =>{
    return movie.date >= new Date(2010, 1, 1)
})
let movies3=[]
movies.map(movie =>{
   movies3.push(movie.director)
})
let movies4=[]
movies.map(movie =>{
    movies4.push(movie.title)
})
let movies5=[]
movies.map(movie =>{
    movies5.push(movie.director.concat(" ", movie.title))
})
let movies6=[]
movies.map(movie=>{
    movies6= [movie.director.concat(" ", movie.title), ...movies6]
})