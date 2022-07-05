const $debounceInput = document.getElementById('debounce-input');
const $resultado = document.getElementById('resultado');
const $cantidadLetras = document.getElementById('letras');

const ActualizarResultado = Debounce((text, long)=>{//Debounce, se ejecuta una sola vez, y ActualizarResultado pasa a tener lo mismo que Debounce
    $resultado.textContent = text;
    $cantidadLetras.textContent = long;
}, 500)

$debounceInput.addEventListener('input', (e)=>{
    ActualizarResultado(e.target.value, e.target.value.length)
})


function Debounce(callback, delay = 1000){    
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)
        }, delay);
    }
}


