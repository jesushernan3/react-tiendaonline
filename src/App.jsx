import './css/App.css'
import ProductCard from './components/ProductCard'

function App() {

  return (
    <>
      <ProductCard product={{title: "primer producto", release_date: "2020"}}/>
      <ProductCard product={{title: "segundo producto", release_date: "2021"}}/>
      <div>pop</div>
    </>
  )
}

export default App
