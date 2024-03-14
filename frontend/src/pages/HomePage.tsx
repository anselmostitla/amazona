import { Product } from '../types/Product'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'

type State = {
  products: Product[]
  loading: boolean
  error: string
}

type Action =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_FAIL'; payload: string }

const initialState: State = {
  products: [],
  loading: false,
  error: '',
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }

    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }

    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}

const HomePage = () => {
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState)

  useEffect(() => {
    (async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/v1/products/')
        console.log("result: ", result);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (error) {
         console.log("error from axios: ", error);
        dispatch({ type: 'FETCH_FAIL', payload: getError(error as ApiError) })
      }
    })()
  }, [])

  return (
      loading ? (<LoadingBox/>): error ? (<MessageBox/>) :
    <div>
      <div className="m-3 p-5 flex justify-center">
        <div className="flex flex-row flex-wrap space-x-3 justify-around w-full">
          {products.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
