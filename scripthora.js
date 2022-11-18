function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'FotoManha.jpg'
        document.body.style.background = '#a2b1d2'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'FotoTarde.jpg'
        document.body.style.background = '#f8b372'
    } else {
        img.src = 'FotoNoite.jpg'
        document.body.style.background = '#3e494d'
    }
}