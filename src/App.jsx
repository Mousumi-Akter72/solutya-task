import Arrival from "./Components/Home/Arrival"
import Banner from "./Components/Home/Banner"
import BestProduct from "./Components/Home/BestProduct"
import Offers from "./Components/Home/Offers"
import TopRated from "./Components/Home/TopRated"


function App() {

  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <Offers />
        <Arrival />
        <BestProduct />
        <TopRated />
      </div>

    </>
  )
}

export default App
