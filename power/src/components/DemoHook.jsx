import { useState } from 'react';
const DemoHook = () => {
    //let city = 'Valenciennes'
    const [city, setCity] = useState('Valenciennes')
    console.log("coucou")

    setTimeout(() => {
        //city = 'Lille'
        setCity('Lille')
    }, 2000)
    return (
        <p>Je pars en voyage à {city}</p>
    )
}

export default DemoHook;