const DemoEvents = () => {

    const displayAlert = () => {
        alert("Vous avez cliqué sur le bouton !!!")
    }

    const displayGoogle = (e) => {
        // stopper le comportement par défaut d'un élément
        e.preventDefault()
    }



  return (
    <>
        <button onClick={displayAlert}>Clique sur moi !!!</button>
        <button onClick={() => alert("Vous avez cliqué sur le bouton !!!")}>Clique sur moi aussi !!!</button>
        <a href="https://www.google.fr" onClick={(displayGoogle)}>Google</a>
    </>
  )
}

export default DemoEvents