import './App.css'
import Hello from './components/hello'

function App() {
  let prenom = 'Louis'
  let liste = ['pizza', 'risotto', 'magret', 'tartiflette', 'raclette']

  return (
    <>
      <h1>Hello {prenom}</h1>
      <p className='red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quam voluptatum, quibusdam, quia, quos voluptatem voluptate quod quas voluptatibus</p>

        <ul>
          {
          liste.map((element, index) => <li key={index}>{element}</li>)
          }
        </ul>
        <p>
          {
            liste.map((element, index) => {
              return(
                <>
                  <strong>{index}</strong>
                  <span>{element}</span>
                </>
              )})}
        </p>
        <Hello firstname="Louis" age={20} />
        <Hello firstname="Bernard" age={20} />
        <Hello firstname="Michel" age={20} />
        <Hello firstname="Jean" age={20} />
        <Hello><strong>Coucou</strong></Hello>
    </>
  )
}

export default App
