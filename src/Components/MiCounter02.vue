<template>
    <!-- Creo un contenedor principal para organizar todo el contenido -->
    <div class="container">
        <!-- Agrego un título que indica el nombre del contenedor, en este caso "Container 02" -->
        <h1 class="title">Container 02</h1>

        <!-- Muestro el valor del contador, el cual se actualiza dinámicamente -->
        <h3 class="counter">Contador: {{ contador }}</h3>

        <!-- Calculo y muestro el cuadrado del valor del contador -->
        <h3 class="square">Cuadrado: {{ contador * contador }}</h3>

        <!-- Grupo de botones que permite interactuar con el contador -->
        <div class="button-group">
            <!-- Botón que, al hacer clic, incrementa el contador llamando a la función 'suma' -->
            <button @click="suma" class="button increment">+1</button>

            <!-- Botón que, al hacer clic, decrementa el contador llamando a la función 'resta' -->
            <button @click="resta" class="button decrement">-1</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    <!-- Importo 'defineProps' desde Vue para manejar las propiedades del componente -->
    import { defineProps } from 'vue';

    <!-- Importo la función 'useSumar' desde el archivo 'sumarBoton.js', la cual se encarga de la lógica del contador -->
    import { useSumar } from './sumarBoton.js';

    <!-- Defino las propiedades que el componente recibe, en este caso un valor numérico inicial -->
    const props = defineProps<{
        value: number;
    }>();

    <!-- Utilizo 'useSumar' pasando el valor inicial para obtener el contador y las funciones 'suma' y 'resta' -->
    const { contador, suma, resta } = useSumar(props.value);
</script>

<style scoped>
    /* Estilos para el contenedor principal, centrado con márgenes y un fondo oscuro */
    .container {
        text-align: center;
        margin: 20px;
        font-family: 'Arial', sans-serif;
        background-color: #1a1a1a;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        border: 2px solid red; 
    }

    /* Estilos para el título, tamaño grande y color rojo con sombra */
    .title {
        font-size: 2.5rem;
        color: red;
        margin-bottom: 20px;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
    }

    /* Estilos para el contador y su cuadrado, con un tamaño de fuente mediano y color blanco */
    .counter,
    .square {
        font-size: 1.5rem;
        margin: 10px 0;
        color: #fff;
    }

    /* El grupo de botones se centra horizontalmente y tiene un margen superior */
    .button-group {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    /* Estilos base para los botones: tamaño grande, sombras y transiciones al hacer hover */
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
        background: red
    }

    /* Estilos para el botón de incremento: fondo transparente */
    .increment {
        background-color: transparent; 
    }

    /* Al hacer hover sobre el botón de incremento, el fondo se vuelve rojo y el botón se agranda ligeramente */
    .increment:hover {
        background-color: red; 
        transform: scale(1.05);
    }

    /* Estilos para el botón de decremento: fondo transparente */
    .decrement {
        background-color: transparent; 
    }

    /* Al hacer hover sobre el botón de decremento, el fondo cambia a un rojo más oscuro y el botón se agranda ligeramente */
    .decrement:hover {
        background-color: #cc0000;
        transform: scale(1.05);
    }
</style>
