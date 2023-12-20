import { useState } from 'react'

const DemoForm = () => {

    const [prenom, setPrenom] = useState("")
    const [message, setMessage] = useState("")
    const [pays, setPays] = useState("France")
    const onSubmit = () => {
        alert('Bonjour ' + prenom + ' !')
        alert(message)
        alert('Tu es né en ' + pays)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="pays">Où es-tu né ?</label>
                    <select value={pays} onChange={(e) => setPays(e.target.value)}>
                        <option selected>France</option>
                        <option>Espagne</option>
                        <option>Italie</option>
                    </select>
                </p>
                <p>
                    <button>Envoyer</button>
                </p>
            </form>
        </>
    )
}

export default DemoForm