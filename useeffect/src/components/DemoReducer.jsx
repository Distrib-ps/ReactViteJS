import { useReducer } from "react"

// ETAPE 1 : Défini le state initial = valeur par défaut de tous les states
const initalState = {
  cpt : 0,
  pays : "France",
  nulber : 0
}

//doit toujours retourner un state

const reducer = (state, action) => {
  //gérer toutes les actions possibles sur le state
  switch (action.type) {
    case 'decr':
      return {
        ...state,
        cpt : state.cpt - 1
      }
    case 'incr':
      return {
        ...state,
        cpt : state.cpt + 1
      }
    case 'setNumber':
      return {
        ...state,
        number : action.payload
      }
    case 'add':
      return {
        ...state,
        cpt: state.cpt + parseInt(state.number), number : ""
      }
    default:
      return state
    }
  }

  const DemoReducer = () => {
    const [state, dispatch] = useReducer(reducer, initalState)

    return (
      <>
        <p>Compteur : {state.cpt}</p>
        <button onClick={() => dispatch({type: 'decr'})}>-</button>
        <button onClick={() => dispatch({type: 'incr'})}>+</button>
        <input type="number" value={state.number} onChange={(e) => dispatch({type: 'setNumber', payload: e.target.value})}/>
        <button onClick={() => dispatch({type: 'add'})}>Ajouter</button>
      </>
    )
  }

  export default DemoReducer