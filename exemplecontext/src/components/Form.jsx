import { useContext, useState } from "react";
import { CountContext } from "../main";


const Form = () => {
    const [state, dispatch] = useContext(CountContext)
    const [number, setNumber] = useState(0)

    const add = (e) => {
        dispatch({ type: 'ADD', payload: number })

    }


    return(
        <>
        <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
        <button onClick={add}>Add</button>
        </>
    )
}

export default Form;