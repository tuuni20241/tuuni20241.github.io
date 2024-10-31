// Manejo del menú desplegable
document.getElementById('menu-toggle').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});



// Inicialización del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 1;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}



// Event listeners para los botones del carrusel
document.querySelector('.carousel-next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});



// Mostrar el primer slide al cargar
showSlide(currentSlide);










document.getElementById('miBoton').addEventListener('click', function () {
    window.location.href = 'programas-academicos.html'; // Redirige a la misma ventana
});





document.getElementById('search').addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
document.getElementById('search-btn').click();
}
 });

// Tu código JavaScript aquí
document.getElementById('search-btn').addEventListener('click', function () {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
    
    const programs = [
        { name: "Administración de Empresas", link: 'ADMINDDEEMPRESASzGENERAL.html' },
        { name: "Administración de Negocios Internacionales", link: 'ADMINDENEGOCIOINTERGENERAL.html' },
        { name: "Administración Financiera", link: 'ADMINIFINANCIERAGENERAL.html' },
        { name: "Arquitectura", link: 'ARQUITECTURAGENERAL.html' },
        { name: "Bacteriología y Laboratorio Clínico", link: 'BACTERIOLOGIAGENERAL.html' },
        { name: "Comercio Internacional", link: 'COMERCIOINTERNACIONALGENERAL.html' },
        { name: "Contaduría Pública", link: 'CONTADURIAPUBLICAGENERAL.html' },
        { name: "Derecho", link: 'DERECHOGENERAL.html' },
        { name: "Diseño de Modas", link: 'DISEÑODEMODASGENERAL.html' },
        { name: "Diseño Gráfico", link: 'DISEÑOGRAFICOGENERAL.html' },
        { name: "Enfermería", link: 'ENFERMERIAGENERAL.html' },                        
        { name: "Fisioterapia", link: 'FISIOTERAPIAGENERAL.html' },
        { name: "Ingeniería Agroindustrial", link: 'INGAGROINDUSTRIALGENERAL.html' },
        { name: "Ingeniería Agronómica", link: 'INGAGRONOMICAGENERAL.html' },
        { name: "Ingeniería Ambiental", link: 'INGAMBIENTALGENERAL.html' },
        { name: "Ingeniería Biotecnológica", link: 'INGBIOTECNOLOGICAGENERAL.html' },
        { name: "Ingeniería Civil", link: 'INGCIVILGENERAL.html' },
        { name: "Ingeniería de Sistemas", link: 'INGDESISTEMASGENERAL.html' },
        { name: "Ingeniería de Software", link: 'INGDESOFTWAREGENERAL.html' },
        { name: "Ingeniería Industrial", link: 'INGINDUSTRIALGENERAL.html' },
        { name: "Ingeniería Mecánica", link: 'INGMECANICAGENERAL.html' },
        { name: "Marketing", link: 'MARKETINGGENERAL.html' },
        { name: "Matemáticas y Ciencias de la Computación", link: 'MATYCIENCIASDELACOMPUGENERAL.html' },
        { name: "Medicina", link: 'MEDICINAGENERAL.html' },
        { name: "Mercadeo y Publicidad", link: 'MERCADEOYPUBLICIDADGENERAL.html' },
        { name: "Odontología", link: 'ODONTOLOGIAGENERAL.html' },
        { name: "Psicología", link: 'PSICOLOGIAGENERAL.html' },
        { name: "Química y Farmacia", link: 'QUIMICAYFARMACIAGENERAL.html' },
        { name: "Terapia Ocupacional", link: 'TERAPIAOCUPAGENERAL.html' },
        { name: "Trabajo Social", link: 'TRABAJOSOCIALGENERAL.html' },
        { name: "Zootecnia", link: 'ZOOTECNIAGENERAL.html' },

        // Agrega más programas aquí...
    ];

    const filteredPrograms = programs.filter(program => program.name.toLowerCase().includes(searchTerm));

    if (filteredPrograms.length > 0) {
        filteredPrograms.forEach(program => {
            const programDiv = document.createElement('div');
            programDiv.className = 'box';    /// O 'box2' / 'box3' dependiendo de tu estilo
            programDiv.className = 'box2';    /// O 'box2' / 'box3' dependiendo de tu estilo
            programDiv.innerHTML = `<p onclick="window.location.href='${program.link}';">${program.name}</p>`;
            resultsContainer.appendChild(programDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
    }
});



















// Obtener el botón arriba
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar u ocultar el botón en función del desplazamiento
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; // Mostrar el botón
    } else {
        scrollToTopBtn.style.display = "none";   // Ocultar el botón
    } 

};

// Al hacer clic, desplazar hacia arriba
scrollToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Desplazamiento suave hacia arriba
};


