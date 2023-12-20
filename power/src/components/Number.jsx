const Number = ({number, power}) => {

if(!power) power = 3;
    return(
        <li>{number} puissance {power} = {number ** power}</li>
    )
}   


export default Number