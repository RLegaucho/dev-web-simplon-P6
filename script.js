document.addEventListener("DOMContentLoaded", function () {
    const salutation = document.querySelector("div.salutation h1");
    const text = salutation.textContent;
    
    function typeText() {
        salutation.textContent = ""; // Efface le texte
        let index = 0;
        
        const interval = setInterval(() => {
            if (index < text.length) {
                salutation.textContent += text[index];
                index++;
            } else {
                clearInterval(interval);
                setTimeout(typeText, 5000); // Relance après 5 secondes
            }
        }, 100);
    }
    
    typeText();
});
