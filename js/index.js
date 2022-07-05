const $debounceInput = document.getElementById('debounce-input');
const $resultado = document.getElementById('resultado');
const $cantidadLetras = document.getElementById('letras');

const ActualizarResultado = Debounce((text, long)=>{//Debounce, se ejecuta una sola vez, y ActualizarResultado pasa a tener lo mismo que Debounce
    $resultado.textContent = text;
    $cantidadLetras.textContent = long;
}, 500)

$debounceInput.addEventListener('input', (e)=>{
    ActualizarResultado(e.target.value, e.target.value.length)//los argumentos estos, pasan a ser del return de debounce, ¿por que?
})


function Debounce(callback, delay = 1000){    
    let timer;  
    return (...args) => {//recibe los dos argumentos en forma de array de ActualizarResultado, el e.target.value y length y luego hace el spread ['a',1] ... ['asd',3]
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)//recibe los dos argumentos en forma de array de ActualizarResultado, el e.target.value y length y luego hace el spread = ['asd',3]
        }, delay);
    }
}


