class usuario{
    constructor(nom, contac){
        this.nombre = nom
        this.contacto = contac
        this.horasAgenda = []
    }
}
// funciones---------------
function guardarUsuario(usuario, hora) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    if(usuarios.find((e) => e.horasAgenda == hora)){
        document.querySelector('#horaYaAgendada').className = 'visible'
    }
    else{
        usuario.horasAgenda.push(hora)
        usuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
    }
}


function mostrarInfo(){
    let contacto = document.querySelector('#consCont').value
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    let usuario = usuarios.find((e) => e.contacto === contacto)

    if (usuario) {
        let interiorHTML = ''
        usuario.horasAgenda.forEach(hora => {
            interiorHTML += `<li>Tiene turno a las ${hora}</li>`
        })
        document.querySelector('#listaHoras').innerHTML = interiorHTML
    } else {
        document.querySelector('#listaHoras').innerHTML = '<li>No se encontraron horarios agendados para este contacto</li>'
    }
}

//-------------------------

let formulario1 = document.querySelector('#formAgenda')
let formulario2 = document.querySelector('#formConsulta')

//         Eventos form             
formulario1.addEventListener('submit', (ev)=> {
    ev.preventDefault()
        if(formulario1[0].value != '' && formulario1[1].value != '' &&  formulario1[2].value != '--'){
            let nombre = formulario1[0].value
            let contacto = formulario1[1].value
            let horario = formulario1[2].value
            let usuario1 = new usuario(nombre, contacto)
            
            //verificamos horario
            guardarUsuario(usuario1, horario)
            document.querySelector('#oculto').className = 'oculto'
        }
        else{
            document.querySelector('#oculto').className = 'visible'
        }
})

formulario2.addEventListener('submit', (ev)=> {
    ev.preventDefault()
    mostrarInfo()
})
//--------------------