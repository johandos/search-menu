$("#buscar").on("keyup", function() {

    var patron = $(this).val();

// si el campo está vacío
    if (patron == "") {

// mostrar todos los elementos
        $(".lista").css("display", "list-item");

// si tiene valores, realizar la búsqueda
    } else {

// atravesar la lista
        $(".lista").each(function() {

            if ($(this).text().indexOf(patron) < 0) {
// si el texto NO contiene el patrón de búsqueda, esconde el elemento
                $(this).css("display", "none");
            } else {
// si el texto SÍ contiene el patrón de búsqueda, muestra el elemento
                $(this).css("display", "list-item");
            }

        });
    }

});