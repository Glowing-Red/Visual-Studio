fetch('Reviews.json').then(response => response.json()).then(reviews => {
    const Container = document.getElementById("Container");
    let CurrentRow

    reviews.forEach((review, index) => {
        if (index % 5 === 0) {
            ReviewRow = document.createElement("div");
            ReviewRow.className = "ReviewRow";
            Container.appendChild(ReviewRow);
            CurrentRow = ReviewRow;
            
        }
        
        const div = document.createElement("div");
        div.className = "Review";
        
        const anchor = document.createElement("a");
        anchor.href = `Assets/Review.html${`?Name=${encodeURIComponent(review.Name)}&Title=${encodeURIComponent(review.Title)}&Hero=${encodeURIComponent(review.Hero)}&Video=${encodeURIComponent(review.Video)}&About=${encodeURIComponent(review.About)}&Release=${encodeURIComponent(review.Release)}`}`
        
        const img = document.createElement("img");
        img.src = review.Poster;
        
        const button = document.createElement("button");
        button.textContent = review.Name;
        
        anchor.appendChild(img);
        anchor.appendChild(button);
        div.appendChild(anchor);
        
        CurrentRow.appendChild(div);
    });
}).catch(error => {console.error('Error loading JSON file:', error);});

/*
    { 
        "Name": "Placeholder", 
        "Poster": "", 
        "Title": "Placeholder", 
        "Hero": "",
        "Video": "", 
        "About": "Placeholder", 
        "Release": "Placeholder" 
    }
*/