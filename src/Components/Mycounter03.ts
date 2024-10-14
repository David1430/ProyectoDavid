import { defineComponent, ref } from 'vue';

// Defino un componente en Vue utilizando el método 'defineComponent'
export default defineComponent({
    // Establezco las propiedades que el componente recibirá desde el padre
    props: {
        // La propiedad 'value' será de tipo número y es obligatoria (required: true)
        value: { type: Number, required: true }
    },
    // Utilizo la función 'setup' para definir la lógica reactiva del componente
    setup(props) {
        // Creo una referencia reactiva llamada 'contador', inicializándola con el valor pasado como propiedad 'value'
        const contador = ref(props.value);

        // Retorno la referencia 'contador' para que pueda ser utilizada en el template del componente
        return { contador: contador }
    },
});
