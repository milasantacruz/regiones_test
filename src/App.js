import { useEffect, useState } from "react";
import './App.css';
import './myStyle.scss'

function App() {
  var[loading, setLoading]=useState(true);
  var[listItems, setListItems] = useState([]);
  useEffect(() => {
    fetch("http://ec2-34-222-195-19.us-west-2.compute.amazonaws.com/api/downloads/regions?cliente=CIAL",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
      }
    })
      .then((response) => response.json())
      .then((list) => {

        console.log(list)
        setListItems(list);
        setLoading(false);
        console.log(listItems);
        //setImageUrl(dog.message); // ⬅️ Guardar datos
        //setIsLoading(false); // ⬅️ Desactivar modo "cargando"
      });
  }, []);

  if(loading){
    return(
      <h1 className="loading">Loading....</h1>
    )
  }

  function isClick(e){
    console.log("clickkk  " + e);
    alert(e.VarCharValue);
  }

  return (
    <div className="App">
      <div className="table" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
      {listItems.map((e,i)=>{
        return(
        <tr className="trr" onClick={()=>{isClick(e)}} data-href="/">
          <td>{i}</td>
          <td align="left">{e.VarCharValue}</td>
        </tr>
        )
      })}
       
      </tbody>
    </div>
     
      {/* 
      <div className="table" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </div> */}
    </div>
  );
}

export default App;
