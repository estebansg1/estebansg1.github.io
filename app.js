$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();
});

function copyEmail() {
    var email = "estebandesa0@gmail.com";
    navigator.clipboard.writeText(email)
        .then(() => {
            var copyIcon = document.getElementById("copyIcon");
            var copiedIcon = document.getElementById("copiedIcon");
            
            copyIcon.style.display = "none";
            copiedIcon.style.display = "inline";

            setTimeout(function() {
                copyIcon.style.display = "inline";
                copiedIcon.style.display = "none";
            }, 3000); // Cambiar de vuelta a "Copiar Email" después de 3 segundos
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}