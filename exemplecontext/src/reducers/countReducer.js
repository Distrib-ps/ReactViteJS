export const initalState = {
    count: 0,
    message: 'Ceci est un message',
    pseudo: 'toto'
}


export const reducer = (state, action) => {
    // agir selon l'action demandé par l'utilisateur
    switch (action.type) {
        case "INCR":
            // faire ses actions


            // retourner le nouveau state
            return {... state, count: state.count + 1}
        case "DECR":
            return {... state, count: state.count - 1}
        case "ADD":
            return {... state, count: state.count + parseInt(action.value)}
    }
}