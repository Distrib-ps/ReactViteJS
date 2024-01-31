import { useNavigate, useParams } from "react-router-dom"

const Post = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const home = () => {
        navigate('/')
    }
    const revenir = () => {
        navigate(-1)
    }


    return (
        <>
        Article {id}

        <button onClick={home}>Retourner sur le home</button>
        <button onClick={ revenir }>Revenir</button>
        </>
    )
}

export default Post