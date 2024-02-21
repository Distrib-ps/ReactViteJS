import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../slices/counterSlice";
import { useState } from "react";

const Home = () => {
    const cpt = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    return (
        <div>
            <h1>Home</h1>
            <p>Counter: {cpt}</p>
            <button onClick={() => dispatch(increment())}>Ajouter 1</button>
            <button onClick={() => dispatch(decrement())}>Enelever 1</button>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(Number(input)))}>Ajouter</button>
        </div>
    )
}

export default Home