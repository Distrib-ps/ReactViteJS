const Hello = ({firstname, age, children}) => {


    return(
        <>
        <h2>Hello {firstname}, tu 
        as {age} ans</h2>
        {children}
        </>
    )
}   

export default Hello