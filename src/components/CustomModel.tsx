import { defineComponent, ref, PropType } from "vue";

export const CustomModel = defineComponent({
  name: "CustomModel",
  props: {
    visible: {
      required: false,
      type: Boolean as PropType<boolean>,
    },
  },
  emits: {
    "update:visible": (value: boolean) => true,
  },
  setup(props, { emit }) {
    return () => (
      <>
        {props.visible ? (
          <button onClick={() => emit("update:visible", false)}>hide me</button>
        ) : null}
      </>
    );
  },
});
