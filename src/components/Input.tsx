import { defineComponent, ref } from "vue";

export const Input  = defineComponent({
    name: 'Input',
    setup(){
        const value = ref('');
        return () => (
          <>
            <input type="text" v-model={value.value} />
            {/* Modifier
                <input type="text" v-model={[value.value,['trim']]} />
            */}
            <h5>V-MODEL: {value.value}</h5>
          </>
        );
    }
})