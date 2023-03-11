import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './Components/Cards';
import { Search } from './Components/Search';


function App() {
  const [searchvalue, setSearchvalue] = useState("briyani")
  const [inputvalue, setInputvalue] = useState(searchvalue)
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
  const data= async()=>{
    const response= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${inputvalue}&app_id=d0d7bc25&app_key=8b2bff8bc01f609505a0f1b701111946`)
    // console.log(response)
    const data= await response.json()
  
   setRecipes(data.hits)
  }
  data();
  
  }, [inputvalue])
  


  
  return (
    <div className="App">
      <Search searchvalue={searchvalue} setSearchvalue={setSearchvalue}  inputvalue={inputvalue} setInputvalue={setInputvalue}/>
      <Cards recipes={recipes} setRecipes={setRecipes} />
   
     
    </div>
  );
}

export default App;
