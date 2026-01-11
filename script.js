function openAirport(evt, airportName) {
    // Esconder todos los contenidos
    var content = document.getElementsByClassName("airport-content");
    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove("active");
    }

    // Quitar clase active de los botones
    var links = document.getElementsByClassName("tab-link");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // Mostrar el actual y marcar botón
    document.getElementById(airportName).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    // Hacer scroll arriba suave
    window.scrollTo({top: 200, behavior: 'smooth'});
}