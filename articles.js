document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-articles");
    newsContainer.innerHTML = "";
    if (newsData.length === 0) {
        newsContainer.innerHTML = "<p>Brak artykułów do wyświetlenia.</p>";
    } else {
        newsData.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <small>${article.date}</small>
                <p>${article.content}</p>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    // Dodanie animacji po załadowaniu
    const newsSection = document.getElementById("news");
    newsSection.classList.add("fade-in"); // Klasa aktywująca animację
});



const newsData = [
    {
        title: "Żegnamy Scroll 1",
        date: "2 kwietnia 2025",
        content: "Żegnamy Scroll 1 2 kwietnia 2025 Chociaż większość z was nie miała okazji doświadczyć najstarszego systemu, stanowi on fundament dla wszystkich późniejszych kampanii, takich jak The Witcher RPG oraz SKRIEWE. System ten był ograniczony, cechował się liniowością, prostą ścieżką fabularną i sztywnymi scenariuszami. Mimo to posiadał pełne zasady, co stanowiło dużą zaletę w porównaniu do eksperymentalnego charakteru swojego następcy. <br><br>W ramach pożegnania odnowiłem kilka prostych kampanii, które oddają charakter tego wyjątkowego systemu. Szczególnie ważnym tytułem jest 'SKRIEWE: Peace and War', lustrzane odbicie oryginalnej kampanii, które w świetny sposób streszcza całą fabułę. Zastanówcie się nad dodaniem tych tytułów do swojej biblioteki i wypróbowaniem ich w dogodnym czasie.<br><br> Miłej gry! :)"

    }
    {
        title: "Nadchodzi....",
        date: "18 lipca 2025",
        content: "Po Ravenburg: Asylum, ARAMie i dwóch sezonach AoT nadszedł wreście czas by przeżyć kolejną przygodę. Kiedy planowane na sierpień testy dobiegną końca, ofijalnie pojawi się Scroll III oraz SKRIEWE III, system stworzony do gry czy gra stworzona do systemu? Przygotujcie się też na hordę okazji w sklepie, masę darmówek i nowych tytułów które zapamiętacie na długo. Oczekujcie zapowiedzi SCROLL'a III i szykujcie się na ostrą jazdę (w 4K 240FPS ;D)"

    }
];
