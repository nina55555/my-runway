import { useState } from 'react'
import './App.css'
import { useQueryClient, useQuery } from '@tanstack/react-query'


function App() {
  //etat
const [sommes, setSommes] = useState([
  {id: 1, nombre: 5555},
  {id: 2, nombre: 5556},
  {id: 3, nombre: 5557},
  {id: 4, nombre: 5558},
  {id: 5, nombre: 5559},
]);
const [newSomme, setNewSomme] = useState("");


//comportements
const handleChange = (e) => {
  e.preventDefault();
  setNewSomme(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const sommesCopy = [...sommes]
  const id = new Date().getTime();
  const nombre = newSomme;
  sommesCopy.push({id, nombre});

  setSommes(sommesCopy);
  setNewSomme("")
}


const handleDelete = (id) => {
  console.log(id);
  const sommesCopy = [...sommes]
  const sommesCopyUpdated = sommesCopy.filter(somme => somme.id!== id)
  setSommes(sommesCopyUpdated)



}
  
//rendu
  return (
    <>
      <div>
        <form action="submit" onSubmit={handleSubmit}> 
          <input 
          value = {newSomme} type="number" placeholder='entrez une somme' onChange={handleChange}/>
          <button>ok</button>
        </form>
        
        <h1>acheteurs:</h1>
        <ul>

          {sommes
          .sort((a,b) => a.nombre < b.nombre ? 1: -1)
          
          /*
          .sort((a,b) => a.nombre > b.nombre ? console.log("Vous devez proposez une enchere plus audacieuse que le dernier acheteur"):""
          )
          */
          .map ((somme) =>(
            <li key={somme.id}>
              {somme.nombre}
              <button onClick={()=> handleDelete(somme.id) }>X</button>
            </li>
          )) 
          }
          
        </ul>

        <div>

        </div>
        
       
      </div>
     
    </>
  )
}

export default App
