import { Link } from "react-router-dom"
import { sampleProducts } from "../data"

const HomePage = () => {
   return(
      <div>
         <div className="m-3 p-5 flex justify-center">
            <div className="flex flex-row flex-wrap space-x-3 justify-around w-full">
               {sampleProducts.map((product) => (
               <Link to={`/product/${product.slug}`}
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
               </Link>
               ))}
            </div>
         </div>
      </div>
   )
}

export default HomePage