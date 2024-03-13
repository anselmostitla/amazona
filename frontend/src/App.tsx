// import './App.css'
import Navbar from './components/Navbar'
import { sampleProducts } from './data'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col h-full ">
      <header>
        <Navbar />
      </header>
      <main className="m-3 p-5 flex justify-center">
        <div className="flex flex-row flex-wrap space-x-3 justify-around w-full">
          {sampleProducts.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col items-center sm:max-w-[250px] w-100%"
            >
              <img
                src={product.image}
                alt={product.name}
                className="sm:max-w-[250px]  w-100% "
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="text-center">All rights reserved</footer>
    </div>
  )
}

export default App
