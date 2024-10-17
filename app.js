const container = document.querySelector('.container');
const icons = document.querySelectorAll('.icon');
const pregunta = document.querySelectorAll('.parrafo-pregunta');
const respuestas = document.querySelectorAll('.respuesta');




icons.forEach( icon =>{

    icon.addEventListener('click', (e)=> {

        let pulsado = e.target;
        let respuesta = e.target.parentElement.nextElementSibling;

        respuestas.forEach(resp =>{
            resp.style.display = "none";
        });

        if(pulsado.textContent === "+"){
            
            icons.forEach( icon =>{
                icon.textContent = "+";
                icon.style.fontSize = "32px";
            });

            pulsado.style.fontSize = "42px";
            pulsado.textContent = "-";
            respuesta.style.display = "flex";
            return;
        }  
            pulsado.style.fontSize = "32px";
            pulsado.textContent = "+";
            respuesta.style.display = "none";
    });
});

