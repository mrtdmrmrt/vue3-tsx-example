import { defineComponent, ref } from "vue";
import { Click } from "/src/components/Click";
import { Label } from "/src/components/Label";
import { Input } from "/src/components/Input";
import { CustomModel } from "/src/components/CustomModel";
import { List, IList } from "/src/components/List";

const listData: IList[] = [
  {
    id: "1",
    name: "Mert",
  },
  {
    id: "2",
    name: "Demir",
  },
];

export const App = defineComponent({
  setup() {
    const customModelValue = ref(true);
    return () => (
      <div>
        Vue3 Uygulamasından Selamlar
        <br />
        <Click />
        <br />
        <Label text="mert">Vue3 - TSX</Label>
        <br />
        <Label
          text="demir"
          showWarning
          v-slots={{
            default: () => "Vue-3 TSX SLOTS",
            warning: () => <h2>Bu bir uyarı mesajıdır</h2>,
          }}
        ></Label>
        <br />
        <List data={listData} />
        <br />
        <Input />
        <br />
        <CustomModel v-model={[customModelValue.value, 'visible']} />
      </div>
    );
  },
});
