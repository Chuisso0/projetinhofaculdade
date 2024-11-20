function filterAnimals() {
    const filterValue = document.getElementById("animal-type").value;
    const animalCards = document.querySelectorAll(".animal-card");

    animalCards.forEach(card => {
        const animalType = card.getAttribute("data-type");

        // Lógica para mostrar ou ocultar com base no valor do filtro
        if (filterValue === "all") {
            card.style.display = "block";
        } else if (filterValue === "dogndcat" && animalType === "cao_gato") {
            card.style.display = "block";
        } else if (filterValue === "roedores" && animalType === "roedor") {
            card.style.display = "block";
        } else if (filterValue === "passaros" && animalType === "passaro") {
            card.style.display = "block";
        } else if (filterValue === "outros" && animalType === "exotico") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}



