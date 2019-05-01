var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "2 + 1",
        review: "Best dramatic movie!"
    }
];

fill(84, 140, 209);
textAlign(CENTER, CENTER);
for(var i = 0; i < movies.length; i++){
    textSize(20);
    text(movies[i].title, 200, i * 120 + 70);
    textSize(16);
    text(movies[i].review, 200, i * 120 + 100);
}
