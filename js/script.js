function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


document.addEventListener("DOMContentLoaded", function() {

    const navbarContainer =
        document.getElementById("navbar-container");

    if (navbarContainer) {
        fetch("components/navbar.html")
            .then(response => response.text())
            .then(html => {
                navbarContainer.innerHTML = html;
            })
            .catch(error => {
                console.error(
                    "Failed to load navbar:",
                    error
                );
            });
    }

});
