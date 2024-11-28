let currentState = 0; // Estado inicial
const totalStates = 46; // Aumentamos el total de estados a 46

// Función para mostrar el estado actual
function showState(state) {
    const estados = document.querySelectorAll('.estado');
    estados.forEach((estado, index) => {
        estado.style.display = index === state ? 'block' : 'none';
    });
}

// Mostrar el estado inicial
showState(currentState);

// Evento de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        if (currentState === 0) {
            currentState = 1; 
            showState(currentState);
        } else if (currentState === 1) {
            currentState = 2; 
            showState(currentState);
        } else if (currentState === 2) {
            currentState = 3; 
            showState(currentState);
        } else if (currentState === 3) {
            currentState = 4; 
            showState(currentState);
        } else if (currentState === 4) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 5) {
            currentState = 6; 
            showState(currentState);
        } else if (currentState === 6) {
            currentState = 10; 
            showState(currentState);
        }
        
        ///nucleo 1
        
        else if (currentState === 10) {
            currentState = 11; 
            showState(currentState);
        } else if (currentState === 11) {
            currentState = 12; 
            showState(currentState);
        } else if (currentState === 12) {
            currentState = 13; 
            showState(currentState);
        } else if (currentState === 16) {
            currentState = 17; 
            showState(currentState);
        }  else if (currentState === 17) {
            currentState = 6; 
            showState(currentState);
        }
        

        //nucleo 2

        else if (currentState === 7) {
            currentState = 19;
            showState(currentState);
        } else if (currentState === 19) {
            currentState = 20; 
            showState(currentState);
        } 
        
        
        else if (currentState === 22) {
            currentState = 23; 
            showState(currentState);
        } else if (currentState === 24) {
            currentState = 25;
            showState(currentState);
        } else if (currentState === 27) {
            currentState = 28; 
            showState(currentState);
        } else if (currentState === 28) {
            currentState = 5;
            showState(currentState);
        } 
        
        //nucleo 3
        else if (currentState === 8) {
            currentState = 29; 
            showState(currentState);
        } else if (currentState === 29) {
            currentState = 30; 
            showState(currentState);
        } else if (currentState === 30) {
            currentState = 31; 
            showState(currentState);
        } else if (currentState === 35) {
            currentState = 36; 
            showState(currentState);
        } else if (currentState === 36) {
            currentState = 37;
            showState(currentState);
        } 
        


        ///nucleo 4

        else if (currentState === 9) {
            currentState = 38; 
            showState(currentState);
        } else if (currentState === 38) {
            currentState = 39; 
            showState(currentState);
        } else if (currentState === 45) {
            currentState = 46; 
            showState(currentState);
        } else if (currentState === 46) {
            currentState = 6; 
            showState(currentState);
        }
    }

  
    if (event.key === 'ArrowLeft') {   //flecha izquierda
        if (currentState === 9) {
            currentState = 8; 
            showState(currentState);
        } else if (currentState === 8) {
            currentState = 7; 
            showState(currentState);
        } else if (currentState === 7) {
            currentState = 6; 
            showState(currentState);
        } 
    }

    if (event.key === 'ArrowRight') { // flecha derecha
       
        ///seleccionar nucleos
       
        if (currentState === 6) {
            currentState = 7; 
            showState(currentState);
        } else if (currentState === 7) {
            currentState = 8; 
            showState(currentState);
        } else if (currentState === 8) {
            currentState = 9; 
            showState(currentState);

            //

        } else if (currentState === 14) {
            currentState = 15; 
            showState(currentState);
        } else if (currentState === 15) {
            currentState = 16; 
            showState(currentState);

            //

        } else if (currentState === 19) {
            currentState = 20; 
            showState(currentState);
        } else if (currentState === 20) {
            currentState = 21; 
            showState(currentState);
        } else if (currentState === 21) {
            currentState = 22; 
            showState(currentState);
        } else if (currentState === 23) {
            currentState = 24; 
            showState(currentState);
        } else if (currentState === 26) {
            currentState = 27; 
            showState(currentState);
        } else if (currentState === 31) {
            currentState = 32; 
            showState(currentState);
        } else if (currentState === 32) { 
            currentState = 33; 
            showState(currentState);
        } else if (currentState === 33) {
            currentState = 34; 
            showState(currentState);
        } else if (currentState === 34) { 
            currentState = 35; 
            showState(currentState);
        }else if (currentState === 38) { 
            currentState = 39; 
            showState(currentState);
        }else if (currentState === 39) { 
            currentState = 40; 
            showState(currentState);
        }else if (currentState === 40) { 
            currentState = 41; 
            showState(currentState);
        }else if (currentState === 41) { 
            currentState = 42; 
            showState(currentState);
        }else if (currentState === 42) { 
            currentState = 43; 
            showState(currentState);
        }else if (currentState === 44) { 
            currentState = 45; 
            showState(currentState);
        }
    }
});

//camara

document.addEventListener("DOMContentLoaded", function () {
    const pantallas = document.querySelectorAll('.estado');
    let estados = 0;

    // Verifica que haya pantallas antes de continuar
    if (pantallas.length === 0) {
        return;
    }

    // cambio de pantalla
    document.body.addEventListener('click', function () {

        pantallas[estados].classList.remove('visible');

   
        estados = (estados + 1) % pantallas.length;


        pantallas[estados].classList.add('visible');

        // activas o desactivar la camara
        if (estados === 17) {
            activarWebcam();
        } else {
            detenerWebcam();
        }
    });

    function activarWebcam() {
        const videoElement = document.getElementById('video');
        if (!videoElement) {
            console.warn("No se encontró el elemento de video.");
            return;
        }

        // activa la cámara
        if (!videoElement.srcObject) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoElement.srcObject = stream;
                })
                .catch((error) => {
                    console.error("Error al acceder a la webcam:", error);
                });
        }
    }

    function detenerWebcam() {
        const videoElement = document.getElementById('video');
        if (!videoElement) {
            console.warn("No se encontró el elemento de video.");
            return;
        }

        // Detener la camara
        if (videoElement.srcObject) {
            const stream = videoElement.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoElement.srcObject = null;
        }
    }
});





////codigo viejo


// Evento de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        if (currentState === 0) {
            currentState = 1; 
            showState(currentState);
        } else if (currentState === 1) {
            currentState = 2; 
            showState(currentState);
        } else if (currentState === 2) {
            currentState = 3; 
            showState(currentState);
        } else if (currentState === 3) {
            currentState = 4; 
            showState(currentState);
        } else if (currentState === 4) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 5) {
            currentState = 12; 
            showState(currentState);
        } else if (currentState === 12) {
            currentState = 14; 
            showState(currentState);
        } else if (currentState === 13) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 14) {
            currentState = 16; 
            showState(currentState);
        } else if (currentState === 15) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 16) {
            currentState = 18; 
            showState(currentState);
        } else if (currentState === 17) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 6) {
            currentState = 22;
            showState(currentState);
        } else if (currentState === 22) {
            currentState = 24; 
            showState(currentState);
        } else if (currentState === 23) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 26) {
            currentState = 5;
            showState(currentState);
        } else if (currentState === 27) {
            currentState = 28; 
            showState(currentState);
        } else if (currentState === 28) {
            currentState = 5;
            showState(currentState);
        } else if (currentState === 29) {
            currentState = 31; 
            showState(currentState);
        } else if (currentState === 30) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 31) {
            
            showState(currentState);
        } else if (currentState === 32) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 7) {
            currentState = 34;
            showState(currentState);
        } else if (currentState === 34) {
            currentState = 36; 
            showState(currentState);
        } else if (currentState === 35) {
            currentState = 5; 
            showState(currentState);
        } else if (currentState === 36) {
            currentState = 38; 
            showState(currentState);
        } else if (currentState === 37) {
            currentState = 5; 
            showState(currentState);
        }else if (currentState === 43) { 
            currentState = 45; 
            showState(currentState);
        }else if (currentState === 44) { 
            currentState = 5; 
            showState(currentState);
        }else if (currentState === 45) { 
            currentState = 5; 
            showState(currentState);
        }else if (currentState === 8) { 
            currentState = 46; 
            showState(currentState);
        }else if (currentState === 46) { 
            currentState = 48; 
            showState(currentState);
        }else if (currentState === 47) { 
            currentState = 5; 
            showState(currentState);
        }else if (currentState === 48) { 
            currentState = 50; 
            showState(currentState);
        }else if (currentState === 49) { 
            currentState = 5; 
            showState(currentState);
        }else if (currentState === 51) { 
            currentState = 5; 
            showState(currentState);
        }else if (currentState === 9) { 
            currentState = 11; 
            showState(currentState);
        }else if (currentState === 11) { 
            currentState = 9; 
            showState(currentState);
        }else if (currentState === 10) { 
            currentState = 0; 
            showState(currentState);
        }else if (currentState === 21) { 
            currentState = 5; 
            showState(currentState);
        }
    }

    if (event.key === 'ArrowLeft') {   //flecha izquierda
        if (currentState === 12) {
            currentState = 13; 
            showState(currentState);
        } else if (currentState === 14) {
            currentState = 15; 
            showState(currentState);
        } else if (currentState === 16) {
            currentState = 17; 
            showState(currentState);
        } else if (currentState === 6) {
            currentState = 5; 6
            showState(currentState);
        } else if (currentState === 22) {
            currentState = 23; 
            showState(currentState);
        } else if (currentState === 28) {
            currentState = 29; 
            showState(currentState);
        } else if (currentState === 29) {
            currentState = 30; 
            showState(currentState);
        } else if (currentState === 7) { 
            currentState = 6; 
            showState(currentState);
        } else if (currentState === 34) {
            currentState = 35; 
            showState(currentState);
        } else if (currentState === 36) { 
            currentState = 37; 
            showState(currentState);
        }else if (currentState === 42) { 
            currentState = 41; 
            showState(currentState);
        }else if (currentState === 41) { 
            currentState = 40; 
            showState(currentState);
        }else if (currentState === 40) { 
            currentState = 39; 
            showState(currentState);
        }else if (currentState === 39) { 
            currentState = 38; 
            showState(currentState);
        }else if (currentState === 43) { 
            currentState = 44; 
            showState(currentState);
        }else if (currentState === 27) { 
            currentState = 26; 
            showState(currentState);
        }else if (currentState === 32) { 
            currentState = 31; 
            showState(currentState);
        }else if (currentState === 8) { 
            currentState = 7; 
            showState(currentState);
        }else if (currentState === 46) { 
            currentState = 47; 
            showState(currentState);
        }else if (currentState === 48) { 
            currentState = 49; 
            showState(currentState);
        }else if (currentState === 9) { 
            currentState = 8; 
            showState(currentState);
        }else if (currentState === 10) { 
            currentState = 9; 
            showState(currentState);
        }else if (currentState === 20) { 
            currentState = 19; 
            showState(currentState);
        }else if (currentState === 19) { 
            currentState = 18; 
            showState(currentState);
        }
        
    }

    if (event.key === 'ArrowRight') { // flecha derecha
        if (currentState === 5) {
            currentState = 6; 
            showState(currentState);
        } else if (currentState === 13) {
            currentState = 12; 
            showState(currentState);
        } else if (currentState === 15) {
            currentState = 14; 
            showState(currentState);
        } else if (currentState === 17) {
            currentState = 16; 
            showState(currentState);
        } else if (currentState === 23) {
            currentState = 22; 
            showState(currentState);
        } else if (currentState === 24) {
            currentState = 25; 
            showState(currentState);
        } else if (currentState === 25) {
            currentState = 26; 
            showState(currentState);
        } else if (currentState === 26) {
            currentState = 27; 
            showState(currentState);
        } else if (currentState === 28) {
            currentState = 29; 
            showState(currentState);
        } else if (currentState === 30) {
            currentState = 29; 
            showState(currentState);
        } else if (currentState === 31) {
            currentState = 32; 
            showState(currentState);
        } else if (currentState === 6) { 
            currentState = 7; 
            showState(currentState);
        } else if (currentState === 35) {
            currentState = 34; 
            showState(currentState);
        } else if (currentState === 37) { 
            currentState = 36; 
            showState(currentState);
        }else if (currentState === 38) { 
            currentState = 39; 
            showState(currentState);
        }else if (currentState === 39) { 
            currentState = 40; 
            showState(currentState);
        }else if (currentState === 40) { 
            currentState = 41; 
            showState(currentState);
        }else if (currentState === 41) { 
            currentState = 42; 
            showState(currentState);
        }else if (currentState === 42) { 
            currentState = 43; 
            showState(currentState);
        }else if (currentState === 44) { 
            currentState = 43; 
            showState(currentState);
        }else if (currentState === 7) { 
            currentState = 8; 
            showState(currentState);
        }else if (currentState === 47) { 
            currentState = 46; 
            showState(currentState);
        }else if (currentState === 49) { 
            currentState = 48; 
            showState(currentState);
        }else if (currentState === 50) { 
            currentState = 51; 
            showState(currentState);
        }else if (currentState === 8) { 
            currentState = 9; 
            showState(currentState);
        }else if (currentState === 9) { 
            currentState = 10; 
            showState(currentState);
        }else if (currentState === 18) { 
            currentState = 19; 
            showState(currentState);
        }else if (currentState === 19) { 
            currentState = 20; 
            showState(currentState);
        }else if (currentState === 20) { 
            currentState = 21; 
            showState(currentState);
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const pantallas = document.querySelectorAll('.estado');
    let estados = 0;

    // Verifica que haya pantallas antes de continuar
    if (pantallas.length === 0) {
        console.error("No se encontraron elementos con la clase 'estado'.");
        return;
    }

    // Configura el evento de cambio de pantalla
    document.body.addEventListener('click', function () {
        // Ocultar la pantalla actual
        pantallas[estados].classList.remove('visible');

        // Incrementar el índice para la siguiente pantalla
        estados = (estados + 1) % pantallas.length;

        // Mostrar la siguiente pantalla
        pantallas[estados].classList.add('visible');

        // Activar o desactivar la webcam en función del estado actual
        if (estados === 0) {
            activarWebcam();
        } else {
            detenerWebcam();
        }
    });

    function activarWebcam() {
        const videoElement = document.getElementById('video');
        if (!videoElement) {
            console.warn("No se encontró el elemento de video.");
            return;
        }

        // Activa la cámara si no está activa
        if (!videoElement.srcObject) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoElement.srcObject = stream;
                })
                .catch((error) => {
                    console.error("Error al acceder a la webcam:", error);
                });
        }
    }

    function detenerWebcam() {
        const videoElement = document.getElementById('video');
        if (!videoElement) {
            console.warn("No se encontró el elemento de video.");
            return;
        }

        // Detener el stream si está activo
        if (videoElement.srcObject) {
            const stream = videoElement.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoElement.srcObject = null;
        }
    }
});