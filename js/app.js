
   //Objeto literal
   let persona = {
           nombre: null,
           edad: null,
           estatura: null,
           peso: null,

           init: function (datos) {
               persona.datos = datos;
           },

           leerPersona: function () {
               return persona.datos;
           }

    }

    let registrar = document.querySelector('#registrar')
    registrar.addEventListener('click', function() {
        // capturamos los valores que ingresa el usuario
        let nombre = $('#nombre').val();
        let edad = $('#edad').val();
        let estatura = parseFloat($('#estatura').val());
        let peso = parseInt($('#peso').val());

         // guardamos los datos en el objeto persona
         let datos = {
             nombre: nombre,
             edad: edad,
             estatura: estatura,
             peso: peso,
         }

         // limpiamos los campos de los datos
         persona.init(datos);
         limpiarCampos();
         alert('datos guardados');
    })

    
    let mostrar = document.querySelector('#mostrar')
    mostrar.addEventListener('click', function() {
            let mensaje = "<h2>Persona</h2>";
            // mostramos los datos de la persona
            let datos = persona.leerPersona();

            mensaje += 'Nombre:' + datos.nombre + '<br>';
            mensaje += 'Edad:' + datos.edad + '<br>';
            mensaje += 'Estatura:' + datos.estatura + '<br>';
            mensaje += 'Peso:' + datos.peso + '<br>';

            $('#salida2').html(mensaje);
    })


    let calcular = document.querySelector('#calcular')
    calcular.addEventListener('click', function(){
         mensaje = "<h2>IMC</h2>";
         // capturamos los datos de los usuarios al hacer click
         datos = persona.leerPersona();
         estatura = datos.estatura;
         peso = datos.peso;

         // calculamos el indice de masa muscular
         var imc = peso / Math.pow(estatura, 2);
         var estado = "";

         if (imc < 18.5) {
             estado = "Se encuentra demasiado delgado";
         } else if (imc > 18.5 && imc < 25) {
             estado = "Normal";
         } else if (imc >= 25 && imc < 30) {
             estado = "Usted posee un ligero sobrepeso";
         } else {
             estado = "Obesidad";
         }

         mensaje += "El indice de masa corporal de " + datos.nombre + " es " + imc + " su estado es " + '<br>' + estado;

         $('#salida2').html(mensaje);

         function limpiarCampos() {
             $('#nombre').val("");
             $('#edad').val("");
             $('#estatura').val("");
             $('#peso').val("");
         }
    })


    

    






 