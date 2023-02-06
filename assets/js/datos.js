diccionarioImagen = {                                               //Creo una CONSTANTE objeto para el figcaption
    desing1: 'Lorem ipsum dolor',
    desing2: 'Nunc pellentesque mollis',
    desing3: 'Mauris sagittis potenti',
    desing4: 'Sollicitudin quisque arcu',
    desing5: 'Mus himenaeos ligula',
    desing6: 'Dignissim nulla turpis',
    image1: 'Sapien dictumst laoreet',
    image2: 'Vitae nullam sed congue',
    image3: 'Ac nisi tincidunt imperdiet',
    image4: 'Nullam tristique neque',
    image5: 'Pharetra torquent justo',
    image6: 'Enim duis aliquet',
    photo1: 'Nunc praesent bibendum',
    photo2: 'imEget enim turpis ides',
    photo3: 'Enim natoque mattis',
    photo4: 'Velit nullam in curae',
    photo5: 'Eros volutpat montes',
    photo6: 'Diam phasellus metus'
}

axios                                                                   //Hago una petición para generar datos de una persona y generar los primeros datos en pantalla
    .get('https://randomuser.me/api/?nat=es&noinfo')
    .then(function (response) {
        datos = response.data.results[0]
        document.getElementById('imagenPersona').setAttribute('src', datos.picture.large)
        document.getElementById('nombrePersona').innerText = datos.name.first + ' ' + datos.name.last
        document.getElementById('informacionEdad').innerText = datos.dob.age
        document.getElementById('informacionMail').innerText = datos.email
        document.getElementById('informacionTelefono').innerText = datos.cell
        document.getElementById('informacionDireccion').innerText = datos.location.street.name + ' ' + datos.location.street.number
        document.getElementById('footerNombre').innerText = datos.name.first + ' ' + datos.name.last
    })
    .catch(function (error) {
        generaError(error)
    })

// Genero el área de SCROLL la cual al pasar hace la animación de los CARD
const scrollOffset = 100
const scrollElement = document.querySelector(".js-scroll")
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  )
}
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled')
}
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled')
}
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement()
  } else {
    hideScrollElement()
  }
}
window.addEventListener('scroll', () => {
  handleScrollAnimation()
})

function muestraDatos(valor) {
    switch (valor) {
        case 'edad':
            document.getElementById('nombrePersona').innerText = new Date(datos.dob.date).toLocaleDateString()
            break
        case 'email':
            document.getElementById('nombrePersona').innerText = datos.email
            break
        case 'domicilio':
            document.getElementById('nombrePersona').innerText = datos.location.city + ' - ' + datos.location.state
            break
        case 'telefono':
            document.getElementById('nombrePersona').innerText = datos.cell
            break
        case 'nombre':
            document.getElementById('nombrePersona').innerText = datos.name.first + ' ' + datos.name.last
            break
    }
}

function generaError(error) {
    const placeHolder = document.getElementById('errorConexion')
    placeHolder.id = 'alertError'
    placeHolder.className = 'alert alert-danger alert-dismissible fixed-top fade show d-flex align-items-center'
    placeHolder.role = 'alert'
    placeHolder.innerHTML = error + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
    document.body.appendChild(placeHolder)
}

function activaGaleria(valor) {
    // Con el FOR genero la imagen a poner y tomo del diccionario el FIGCAPTION correspondiente
    let frase = Object.values(diccionarioImagen)
    switch (valor) {
        case 'desing':
            for (let index = 1; index <= 6; index++) {
                document.getElementById('frame' + index + '').setAttribute('src','assets/image/webdesing' + index + '.webp')
                document.getElementById('fig-frame' + index + '').innerHTML =  frase[index - 1]
            }
            break
        case 'image':
            for (let index = 1; index <= 6; index++) {
                document.getElementById('frame' + index + '').setAttribute('src','assets/image/image' + index + '.webp')
                document.getElementById('fig-frame' + index + '').innerHTML =  frase[index + 5]
            }
            break
        case 'photo':
            for (let index = 1; index <= 6; index++) {
                document.getElementById('frame' + index + '').setAttribute('src','assets/image/photo' + index + '.webp')
                document.getElementById('fig-frame' + index + '').innerHTML =  frase[index + 11]
            }
            break
    }
}