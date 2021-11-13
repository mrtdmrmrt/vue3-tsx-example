import {defineComponent,PropType, CSSProperties} from 'vue'

const labelStyle: CSSProperties = {
    fontSize: '15px',
    color: 'blue'
}

export const Label = defineComponent({
    name: 'Label',
    props:{
        text:{
            type: String as PropType<string>,
            required: true
        },
        showWarning:{
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    setup(props, {slots}){
        return () => (
          <>
            <label>{props.text}</label>
            <strong>{slots.default?.()}</strong>
            {props.showWarning ? (
              <i style={labelStyle}>{slots.warning?.()}</i>
            ) : (
              "show label false"
            )}
          </>
        );
    }
})