import { defineComponent, PropType } from "vue";

export interface IList{
    id: string,
    name: string
}

export const List = defineComponent({
    name: 'List',

    props: {
        data:{
            required: true,
            type: Array as PropType<IList[]>
        }
    },
    setup(props){
        return ()=>(
            <>
                <strong>LİSTE</strong> 
                {/* <ul>
                    {
                        props.data.map(v => <li key={v.id}>{v.name}</li>)
                    }
                </ul> */}
                <ul>
                    {
                        vFor(props.data, v=>{
                            return <li key={v.id}>{v.name}</li>;
                        })
                    }
                </ul>
            </>
        )
    }
})

function vFor<T>(arr: T[], callback: (children: T, index: number) => any){
    return arr.map((v,index) => {
        return callback(v, index)
    })
}