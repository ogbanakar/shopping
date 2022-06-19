import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import './index.css'
import data from "./data";
import {useState} from 'react';
const App = () => {
  const { products } =data
  const [cartItems, setcartItems] = useState([]);
  const onAdd =(product) => {
    const exist =cartItems.find(x =>x.id === product.id);
    if(exist){
      setcartItems(cartItems.map(x => x.id === product.id ?{...exist,qty: exist.qty+1}:x))
    }else {
      setcartItems([...cartItems, {...product.qty1}]);
    }
  };
  return <div className="app">
  <Header />
    <div className="row">
      <Main onAdd={onAdd} products={products} />
      <Basket onAdd={onAdd} cartItems={cartItems} />
    </div>
     
  </div>;
};

export default App;
