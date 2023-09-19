document.addEventListener("DOMContentLoaded", () => {
    const jokeButton = document.getElementById("fetchJoke");
    const jokeText = document.getElementById("joke");

    const apiUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    // Function to fetch and display a single-line joke
    const fetchSingleLineJoke = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data.type === "single") {
                jokeText.textContent = data.joke;
            } else {
                jokeText.textContent = "An error occurred while fetching the joke.";
            }
        } catch (error) {
            console.error("Error fetching joke:", error);
            jokeText.textContent = "An error occurred while fetching the joke.";
        }
    };

    // Event listener for the "Fetch Joke" button
    jokeButton.addEventListener("click", fetchSingleLineJoke);

    // Fetch and display an initial joke when the page loads
    fetchSingleLineJoke();
});
