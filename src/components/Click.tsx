import { ref, defineComponent } from "vue";

export const Click = defineComponent({
    name: 'Click',
    setup(){
        const count = ref(0);
        return () => (
          <button onClick={() => count.value++}>Toplam Click: {count.value}</button>
        );
    }
})