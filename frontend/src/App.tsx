// import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col h-full ">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="text-center">All rights reserved</footer>
    </div>
  )
}

export default App
