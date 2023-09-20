const reviews = [
    { title: "Jurassic Park", href: "Filmer/Jurassic Park.html", image: "Assets/Filmer/Jurassic Park/Cover.png" },
    { title: "The Lost World", href: "Filmer/The Lost World.html", image: "Assets/Filmer/The Lost World/Cover.jpg" },
    { title: "Jurassic Park III", href: "Filmer/Jurassic Park III.html", image: "Assets/Filmer/Jurassic Park III/Cover.jpg" }
];

const reviewContainer = document.getElementById("Reviews Container");

reviews.forEach(review => {
    const div = document.createElement("div");
    div.className = "Review";

    const a = document.createElement("a");
    a.href = review.href;

    const img = document.createElement("img");
    img.src = review.image;

    const button = document.createElement("button");
    button.textContent = review.title;

    a.appendChild(img);
    a.appendChild(button);
    div.appendChild(a);

    reviewContainer.appendChild(div);
});
