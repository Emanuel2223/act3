document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header").innerHTML = `
        <header>
            <img src="image/logo.png" alt="Logo BMW" width="80">
            <button id="menu-toggle">&#9776;</button>
            <nav id="nav">
                <ul class="nav-list">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="pagina1.html">Modelos</a></li>
                    <li><a href="pagina2.html">Contacto</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.getElementById("footer").innerHTML = `
        <footer>
            <p>© 2025 Mi pagina web - Todos los derechos reservados</p>
            <div class="redes-sociales">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </footer>
    `;

    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});