import { useEffect, useState } from 'react'

const UserForm = () => {

    const [user, setUser] = useState("")

    const [userList, setUserList] = useState(() => {
        const savedUserList = JSON.parse(localStorage.getItem('userList'));
        return savedUserList || [];
      });

    const [errorMessage, setErrorMessage] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if (user.trim() === '') {
            setErrorMessage('Le champ ne peut pas être vide.');
            return;
          }
      
          if (userList.includes(user.toUpperCase())) {
            setErrorMessage('Utilisateur déjà existant...');
            return;
          }
      
          setUserList(userList.concat(user.toUpperCase()));
        //   setUserList([...userList, user.toUpperCase()]);
          setUser('');
          setErrorMessage('');
    };

    const deleteUser = (index) => {
        const updatelist = [...userList];
        updatelist.splice(index, 1);
        setUserList(updatelist);
    }

    useEffect(() => {
        localStorage.setItem('userList', JSON.stringify(userList));
        }, [userList]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="user">Pseudo</label>
                    <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value.toUpperCase())}/>
                </p>
                <p>
                    <button>Envoyer</button>
                </p>
                {<p><span style={{ color: 'red' }}>{errorMessage}</span></p>}
            </form>
            <ul>
                {userList.map((user, index) => (
                <li key={index}>
                    {user}
                    <button onClick={() => deleteUser(index)}>x</button>
                </li>
                    
                ))}
            </ul>
        </>
    )
}

export default UserForm