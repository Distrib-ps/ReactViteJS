import { useContext } from "react";
import { CountContext } from "../main";


const Counter = () => {
    const { state, dispatch } = useContext(CountContext)

    return (
        <p>Le compteur est à : {state.count}</p>
    )
}

export default Counter;