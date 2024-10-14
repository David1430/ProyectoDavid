// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// Por convención, el nombre de una función composable comienza con "use"
export function useMouse() {
  // El estado está encapsulado y gestionado por el composable
  const x = ref(0) // Declaro una variable reactiva 'x' con valor inicial 0
  const y = ref(0) // Declaro una variable reactiva 'y' con valor inicial 0

  // Un composable puede actualizar su estado gestionado con el tiempo.
  function update(event) {
    // Actualizo las coordenadas del mouse en base a los valores del evento
    x.value = event.pageX
    y.value = event.pageY
  }

  // Un composable también puede conectarse al ciclo de vida de su componente
  // propietario para configurar y deshacer efectos secundarios.
  // Cuando el componente se monta, añado un listener para el evento 'mousemove'
  onMounted(() => window.addEventListener('mousemove', update))
  // Cuando el componente se desmonta, elimino el listener para evitar fugas de memoria
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // Expongo el estado gestionado (las coordenadas 'x' e 'y') como valor de retorno
  return { x, y }
}
