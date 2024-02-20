import { useState } from 'react';
import Password from './components/Password';

const App = () => {
  const [password, setPassword] = useState('');


  return (
    <div>
      <h1>Création de compte</h1>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" />
        <br />
        <label htmlFor="password">Mot de passe</label>
        <Password value={password} onChange={setPassword} />
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default App;
