$('form').on('submit',function(e){
    e.preventDefault()

    let idUsuario = $('#id-usuario').val()
    let url = "https://jsonplaceholder.typicode.com/users/"
    url = url+idUsuario

    axios.get(url)
    .then(res => {
        mostrar(res)
    })
    .catch(err => {
        $('info-usuario').html('<p>No se encontró la informacon del usuario</p>')
})

})

function mostrar(res){
    var usuario = res.data
    debugger

    $('#nombre').val(usuario.name);
    $('#usuario').val(usuario.username);
    $('#correo').val(usuario.email);
    $('#calle').val(usuario.address.street);
    $('#numero').val(usuario.address.suite);
    $('#ciudad').val(usuario.address.city);

                // '<p>Nombre:'+ usuario.name +' </p>' +
                // '<p>Usuario:'+ usuario.username +' </p>' +
                // '<p>Correo:'+ usuario.email +' </p>' +
                // '<p>Calle:'+ usuario.address.street +' </p>' +
                // '<p>Numero :'+ usuario.address.suite +' </p>' +
                // '<p>Ciudad :'+ usuario.address.city +' </p>' +

    $('#info-usuario').html(infouser)
}

$('#btnLimpiar').on('click', function(){

    $('#id-usuario').val("");
    $('#nombre').val("");
    $('#usuario').val("");
    $('#correo').val("");
    $('#calle').val("");
    $('#numero').val("");
    $('#ciudad').val("");

})