import {useEffect,useState, useMemo, useRef} from "react"
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [products,setProduct] = useState([]);

  const nameRef = useRef();

  const handleOnSubmit = () => {
    setProduct([...products,{
      name,
      price: +price
    }])

    setName('')
    setPrice('')

    nameRef.current.focus();
  }

  const total = useMemo(()=>{
    console.log("Tinh toán...")
    const result = products.reduce((result,prod)=>{
      return result+prod.price
    },0)

    return result
  },[products])

  return (
    <div>
      <input type="text" placeholder="Enter name..."
      value={name} 
      ref={nameRef}
      onChange={e => setName(e.target.value)}/>

      <input type="text" placeholder="Enter price..."
      value={price} 
      onChange={e => setPrice(e.target.value)}/>

      <button onClick={handleOnSubmit}>Add New</button>

      <h1><b>Total: </b> {total}</h1>
      <ul>
        {products.map((product,index) => (
          <li key={index}>{product.name}-{product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
