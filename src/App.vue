<template>
  <div class="container">
    
    <h1 class="title">Hola David!</h1>
    <!-- Contenedor de los tres contadores que se importan desde otros componentes -->
    <div class="counter-group">
      <!-- Invocando al componente Mycounter con un valor inicial de 25 -->
      <Mycounter :value="25" />
      <!-- Invocando al componente Mycounter02 con un valor inicial de 4 -->
      <Mycounter02 :value="4" />
      <!-- Invocando al componente Mycounter03 con un valor inicial de 8 -->
      <Mycounter03 :value="8" />
    </div>
    <!-- Muestra la posición actual del mouse en la página -->
    <div class="mouse-position">
      Ubicación del Mouse es: <span>{{ x }}</span>, <span>{{ y }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // Importo los tres componentes Mycounter, Mycounter02, y Mycounter03
  import Mycounter from './Components/MiCounter.vue';
  import Mycounter02 from './Components/MiCounter02.vue';
  import Mycounter03 from './Components/MiCounter03.vue';

  // Importo el composable useMouse para obtener la posición del mouse
  import { useMouse } from './ComposableUno.js';

  // Extraigo las coordenadas 'x' e 'y' de la posición del mouse desde el composable
  const { x, y } = useMouse();
</script>

<style scoped>
.container {
  /* Diseño del contenedor principal que alinea los elementos en el centro y añade estilos */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000; /* Fondo negro */
  color: red; /* Texto en rojo */
  padding: 30px;
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 20px rgba(255, 0, 0, 0.5); /* Sombra roja */
  border: 2px solid red; /* Borde rojo */
}

.title {
  /* Estilos para el título principal */
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.8); /* Sombra de texto roja */
}

.counter-group {
  /* Diseño del grupo de contadores, con un espacio entre ellos */
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.mouse-position {
  /* Estilos para mostrar la posición del mouse */
  font-size: 1.25rem;
  margin-top: 10px;
  background-color: #333; /* Fondo oscuro */
  color: #fff; /* Texto blanco */
  padding: 10px;
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Sombra del contenedor */
}
</style>
