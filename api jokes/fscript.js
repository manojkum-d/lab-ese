document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const comment = document.getElementById("comment").value.trim();

       
        if (name === "" || email === "" || comment === "") {
            alert("Please fill in all fields.");
        } else if (!isAlphabetic(name)) {
            alert("Name should contain only alphabetic characters.");
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            
            alert("Form submitted successfully!");
            
            feedbackForm.reset();
        }
    });

    function isAlphabetic(text) {
        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            if (!isLetter(char)) {
                return false;
            }
        }
        return true;
    }
    function isLetter(char) {
        return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});
