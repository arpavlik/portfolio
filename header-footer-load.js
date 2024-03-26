window.onload = function () {
    fetch("header.html")
        .then((response) => response.text())
        .then((html) => {
            document.getElementById("header").innerHTML = html;
        });
    fetch("footer.html")
        .then((response) => response.text())
        .then((html) => {
            document.getElementById("footer").innerHTML = html;
            //year for footer copyright
            var currentYear = new Date().getFullYear();
            document.getElementById("currentYear").innerText = currentYear;
        });
};
