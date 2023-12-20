import './App.css'
import Number from './components/Number'
import Students from './components/Students'
import DemoHook from './components/DemoHook'
import Clock from './components/Clock'
import Slider from './components/Slider'
import DemoEvents from './components/DemoEvents'
import DemoForm from './components/DemoForm'
import UserForm from './components/UserForm'

function App() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let power = 10

  return (
    <>
      <UserForm />
      <DemoForm />
      <DemoEvents />
      <Slider />
      <Clock />
      <DemoHook />
      {number.map((number) => (
        <Number key={number} number={number} power={power}/>
      ))}
      
      <Students />
    </>

  )
}

export default App
