import { useState } from "react";
import "./App.css";
import { useQueryClient, useQuery } from "@tanstack/react-query";

function App() {
  //etat


  const [sommes, setSommes] = useState([5555
    /*{ id: 1, nombre: 5555 },
    { id: 2, nombre: 5556 },
    */
  ]);
  
  const [newSomme, setNewSomme] = useState("");


  //console.log(listSommes)

  //comportements
  const handleChange = (e) => {
    e.preventDefault();
    setNewSomme(e.target.value);
  };


    
      const handleSubmit = (e) => {
        e.preventDefault();
        //chercher comparateur de stringify >
        console.log (JSON.stringify(newSomme))
        console.log (JSON.stringify(sommes))
        
      
        const sommesCopy = [...sommes];
        const max = Math.max(...sommesCopy)
        console.log(max)
        if (max>newSomme){
          alert("allons un peu de nerf"),
        setNewSomme("");
          return;
        }
        sommesCopy.push(newSomme);
        setSommes(sommesCopy);
      
        setNewSomme("");
}
     
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    const sommesCopy = [...sommes];
    const id = new Date().getTime();
    const nombre = newSomme;
    sommesCopy.push({ id, nombre });
    setSommes(sommesCopy);
    setNewSomme("");
  };
    
  */



  //essai async fonction
  /*async function handleSubmit (newSomme) {
    if (JSON.stringify(newSomme)>
        JSON.stringify(sommes.nombre)) (
          setNewSomme(true)
        )
          const sommesCopy = [...sommes];
          const id = new Date().getTime();
          const nombre = newSomme;
          sommesCopy.push({ id, nombre });
          setSommes(sommesCopy);
          setNewSomme(""); 
  }
*/

//essai2
/*
const handleSubmit = (e) => {
  e.preventDefault();
  const sommesCopy = [...sommes];
  const id = new Date().getTime();
  const nombre = newSomme;
  sommesCopy.push({ id, nombre });
  setSommes(sommesCopy);
  
  //valeurs des variables sommes et newSomme a stringify pour pouvoir les comparer
  const listSommes = sommes.filter((sommes =>{newSomme<[sommes.nombre]} ) );

  if (JSON.stringify(newSomme)>
  JSON.stringify([sommes.nombre])) (
    
    setNewSomme(true)
  )
  console.log(listSommes)
  console.log(sommes)
  console.log(newSomme)//
  console.log(sommes,newSomme)
  setNewSomme("");
};
*/

//essaie3
/*
const handleSubmit = (e) => {
  e.preventDefault();
  const sommesCopy = [...sommes];
  const id = new Date().getTime();
  const nombre = newSomme;
  sommesCopy.push({ id, nombre });
  setSommes(sommesCopy);
  
  //valeurs des variables sommes et newSomme a stringify pour pouvoir les comparer
  const listSommes = sommes.filter((sommes =>{newSomme<[sommes]} ) );




  console.log(listSommes)
  console.log(sommes)
  console.log(newSomme)//
  console.log(sommes,newSomme)
  setNewSomme("");
};
*/

//essai4


 
  

  //valeurs des variables sommes et newSomme a stringify pour pouvoir les comparer
 




//
  const handleDelete = (delsomme) => {

    const sommesCopy = [...sommes];
    const sommesCopyUpdated = sommesCopy.filter((somme) => somme !== delsomme);

    setSommes(sommesCopyUpdated);
  };

  //rendu
  return (
    <>
      <div>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            value={newSomme}
            type="number"
            placeholder="entrez une somme"
            onChange={handleChange}
          />
          <button>ok</button>
        </form>
        <h1>acheteurs:</h1>
        <ul>
          {sommes
          //a voir car ca ne prend en compte que le premier numero du nombre sommes
            //.sort((a, b) => (a.nombre < b.nombre ? 1 : -1))
            .sort((a, b) => (a < b ? 1 : -1))
            .map((somme,i) => (
              <li key={i}>
                {somme}
                <button onClick={() => handleDelete(somme)}>X</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;

/*
  if(newSomme<=amount)
    return
*/
/*
const [amount, setAmount] = useState ("5555");
*/

/*
  if (!sommes>amount)
   console.log("oh oh!")
  return ("no no no!")
*/
