import './styles/index.scss'
import './App.css'
import Number from './components/Number'
import Students from './components/Students'
import DemoHook from './components/DemoHook'
import Clock from './components/Clock'
import Slider from './components/Slider'
import DemoEvents from './components/DemoEvents'
import DemoForm from './components/DemoForm'
import UserForm from './components/UserForm'
import Nav from './components/Nav'
import Post from './components/Post'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let power = 10

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/DemoForm" element={<DemoForm />} />
        <Route path="/DemoEvents" element={<DemoEvents />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Clock" element={<Clock />} />
        <Route path="/DemoHook" element={<DemoHook />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
    <h1>------------</h1>
      {number.map((number) => (
        <Number key={number} number={number} power={power}/>
      ))}
    </>

  )
}

export default App
