import { ref } from 'vue';

// Defino una función 'useSumar' que recibe un valor inicial como parámetro
export function useSumar(initialValue) {
    // Creo una referencia reactiva 'contador' inicializada con el valor que se pasa como argumento
    const contador = ref(initialValue);

    // Defino una función 'suma' que incrementa el valor del contador en 1
    const suma = () => {
        contador.value++;
    };

    // Defino una función 'resta' que decrementa el valor del contador en 1
    const resta = () => {
        contador.value--;
    };

    // Retorno el contador junto con las funciones 'suma' y 'resta' para que puedan ser utilizadas fuera de esta función
    return { contador, suma, resta };
}
