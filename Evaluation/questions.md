Theo Delhay

QUESTIONS DE COURS /5 POINTS

1. Quel composant vu en cours permet la gestion des routes avec React ?

    Nous utilisons react-router-dom, qui utilise les composants : <BrowserRouter> <Routes> ainsi que <Link>

2. Quel hook permet de récupérer un paramètre passé dans l’url ?

    Nous utilisons useParams() pour récupérer le param passer dans URL

3. Qu’est-ce qu’un fragment ?

    Un fragement ressemble à `<> </>`. Il permet de grouper une liste d'éléments enfants sans ajouter autre chose au DOM.
    Il permet également de ne pas mettre de div

4. Quel hook permet de déclencher une action à un moment précis du cycle de vie du composant ?

    Il s'agit de useEffect()

5. React manipule-t-il directement le DOM de l’application ? expliquez…

    Non, Reac ne manipule pas directement le DOM de l'application. Il va utiliser un Virtual DOM. Ce qui va lui permettre d'être plus performant. Le Virtual DOM est une copie du DOM, qui va permettre de compararer les deux versions pour apporter seulement les modifications qui sont nécéssaires.

QUESTIONS PRATIQUES /5 POINTS

Pour les questions suivantes, la réponse devra être une et une seule ligne de code :

1. Vous mettez en place un routeur sur votre projet react, écrivez la route qui permet de lancer le composant Post en
lui transmettant le slug du post à afficher en paramètre.

    <Route path="/post/:slug" element={<Post />} />

2. Vous utilisez useReducer dans votre projet. Dans le code JSX, quel code permet d’afficher un bouton qui, lorsque
l’on clique dessus, lance l’action « SET_ITEM »

    <button onClick={() => dispatch({ type: 'SET_ITEM' })}>Exécute Set Item</button>

3. Votre composant nécessite un state isAdmin. Ecrivez la ligne qui permet de le créer et de lui affecter la valeur « false » par dafaut.

    const [isAdmin, setIsAdmin] = useState(false);

4. En JSX, une div affiche le texte du state « message », elle possède du style inline déterminant sa couleur de police à
rouge.

    <div style={{ color: 'red' }}>{message}</div>

5. En JSX, créez un input qui est rattaché au state « ville » et qui stockera ce que saisit l’utilisateur dans le state.

    <input value={ville} onChange={(e) => setVille(e.target.value)} />
