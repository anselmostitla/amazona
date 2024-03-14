import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'





const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox></MessageBox>
  ) : (
    <div>
      <div className="m-3 p-5 flex justify-center">
        <div className="flex flex-row flex-wrap space-x-3 justify-around w-full">
          <Helmet>
            <title>Ts Amazona</title>
          </Helmet>
          {products!.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
