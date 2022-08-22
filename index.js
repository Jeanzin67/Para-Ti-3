const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    Swal.fire({
        title: 'Sabia que aceptarias Amor 😍',
        confirmButtonText: 'Dale click 😊',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: 'rgba(207, 208, 218, 1)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/img/cat.gif")
          left top
          no-repeat
        `
    }).then((result) => {
        if (result.isConfirmed) {
            let url = "https://api.whatsapp.com/send?phone=51959999787&text=" + "Si acepto mi amor 🥰" + "%0A";
            window.open(url, "Enviar");
        }
    })
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})