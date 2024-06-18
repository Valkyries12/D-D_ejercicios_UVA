const imagen = $("#image-container");

imagen.hide();

$("#btn_mostrar").on("click", function (event) {
    $(".h4").text("¡Mirá la siguiente imagen!");
    imagen.show();
});

$("#btn_ocultar").on("click", function (event) {
    $(".h4").text("¡No tenemos ninguna imagen!");
    imagen.hide();
});

