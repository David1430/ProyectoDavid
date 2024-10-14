<template>
    <!-- Estoy creando un contenedor que va a englobar todo el contenido de la interfaz -->
    <div class="container">
        <!-- Aquí añado el título principal de la página, "Container 01" -->
        <h1 class="title">Container 01</h1>
        
        <!-- Muestro el valor del contador actual, que se actualizará dinámicamente -->
        <h3 class="counter">Contador: {{ contador }}</h3>
        
        <!-- Calculo y muestro el cuadrado del valor del contador -->
        <h3 class="square">Cuadrado: {{ contador * contador }}</h3>

        <!-- Este div contiene los botones para interactuar con el contador -->
        <div class="button-group">
            <!-- Al hacer clic en este botón, incremento el valor del contador llamando a la función suma -->
            <button @click="suma" class="button increment">+1</button>
            
            <!-- Al hacer clic en este botón, decremento el valor del contador llamando a la función resta -->
            <button @click="resta" class="button decrement">-1</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    <!-- Estoy importando 'defineProps' desde Vue para definir las propiedades del componente -->
    import { defineProps } from 'vue';
    
    <!-- También importo la función 'useSumar' desde el archivo 'sumarBoton.js' que gestiona el contador -->
    import { useSumar } from './sumarBoton.js';

    <!-- Defino las propiedades que el componente puede recibir, en este caso un valor numérico inicial -->
    const props = defineProps<{
        value: number;
    }>();

    <!-- Llamo a 'useSumar' pasando el valor inicial y obtengo el contador, así como las funciones 'suma' y 'resta' -->
    const { contador, suma, resta } = useSumar(props.value);
</script>

<style scoped>
    <!-- Defino el estilo para el contenedor, centrando el contenido, dándole un margen y estilizando su apariencia -->
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

    <!-- Aquí doy estilo al título principal, con un tamaño grande y un color rojo brillante con un efecto de sombra -->
    .title {
        font-size: 2.5rem;
        color: red; /* Color neón */
        margin-bottom: 20px;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
    }

    <!-- Estilos para el contador y su cuadrado, les doy un color blanco y un tamaño de fuente más grande -->
    .counter,
    .square {
        font-size: 1.5rem;
        margin: 10px 0;
        color: #fff;
    }

    <!-- El grupo de botones se centra en el contenedor -->
    .button-group {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    <!-- Defino el estilo base de los botones, con un tamaño grande, sombra y transiciones al pasar el ratón sobre ellos -->
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
        background: blue;
    }

    <!-- Estilo para el botón de incremento, comienza con fondo transparente -->
    .increment {
        background-color: transparent;
    }

    <!-- Al pasar el ratón sobre el botón de incremento, cambia a rojo y se agranda ligeramente -->
    .increment:hover {
        background-color: red;
        transform: scale(1.05);
    }

    <!-- Estilo para el botón de decremento, también comienza con fondo transparente -->
    .decrement {
        background-color: transparent;
    }

    <!-- Al pasar el ratón sobre el botón de decremento, cambia a un tono rojo más oscuro y se agranda ligeramente -->
    .decrement:hover {
        background-color: #cc0000;
        transform: scale(1.05);
    }
</style>
