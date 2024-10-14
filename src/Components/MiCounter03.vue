<template>
    <!-- Creo un contenedor principal que organiza todo el contenido de la página -->
    <div class="container">
        <!-- Aquí coloco un título que identifica este contenedor como "Container 03" -->
        <h1 class="title">Container 03</h1>

        <!-- muestro el valor del contador dinámicamente utilizando la variable 'contador' -->
        <h3 class="counter">Contador: {{ contador }}</h3>

        <!-- calculo y muestro el cuadrado del valor del contador -->
        <h3 class="square">Cuadrado: {{ contador * contador }}</h3>

        <!-- creo un grupo de botones para que el usuario pueda interactuar -->
        <div class="button-group">
            <!-- Cuando hago clic en este botón, llamo a la función 'suma' para incrementar el contador -->
            <button @click="suma" class="button increment">+1</button>

            <!-- Cuando hago clic en este botón, llamo a la función 'resta' para disminuir el contador -->
            <button @click="resta" class="button decrement">-1</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    <!-- importo 'defineProps' de Vue para poder definir las propiedades del componente -->
    import { defineProps } from 'vue';

    <!-- importo la función 'useSumar' desde el archivo 'sumarBoton.js' que me permite manejar el contador -->
    import { useSumar } from './sumarBoton.js';

    <!-- defino las propiedades que el componente recibirá, en este caso, un valor numérico -->
    const props = defineProps<{
        value: number;
    }>();

    <!-- Uso la función 'useSumar', pasando el valor inicial, para obtener las funciones 'suma', 'resta' y el valor del contador -->
    const { contador, suma, resta } = useSumar(props.value);
</script>

<style scoped>
    /*centro el texto del contenedor y le doy estilo con márgenes, un fondo oscuro y esquinas redondeadas */
    .container {
        text-align: center;
        margin: 20px;
        font-family: 'Arial', sans-serif;
        background-color: #1a1a1a;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        border: 2px solid red; /* Borde brillante */
    }

    /*tamaño grande al título y lo hago de color rojo neón con sombra */
    .title {
        font-size: 2.5rem;
        color: red; /* Color neón */
        margin-bottom: 20px;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
    }

    /*doy un tamaño mediano al texto del contador y su cuadrado, además de ponerlo en color blanco */
    .counter,
    .square {
        font-size: 1.5rem;
        margin: 10px 0;
        color: #fff;
    }

    /*hago que el grupo de botones esté centrado y le doy un margen superior */
    .button-group {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    /*defino el estilo base de los botones, con sombras, bordes redondeados y transiciones */
    .button {
        padding: 15px 25px;
        font-size: 18px;
        cursor: pointer;
        margin: 0 10px;
        border: none;
        border-radius: 8px;
        transition: transform 0.2s, background-color 0.3s ease;
        color: white;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
        background: red;
    }

    /*defino el estilo del botón de incremento, que inicialmente tiene un fondo transparente */
    .increment {
        background-color: transparent;
    }

    /*cambio el color del botón de incremento a rojo y lo agrando un poco cuando paso el mouse sobre él */
    .increment:hover {
        background-color: red;
        transform: scale(1.05);
    }

    /*defino el estilo del botón de decremento, también con fondo transparente inicialmente */
    .decrement {
        background-color: transparent;
    }

    /*cambio el color del botón de decremento a un rojo más oscuro y lo agrando un poco cuando paso el mouse sobre él */
    .decrement:hover {
        background-color: #cc0000;
        transform: scale(1.05);
    }
</style>
