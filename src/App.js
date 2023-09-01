import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [users,setUser] = useState();
  // const fetchData = () =>{
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) =>{
    //   return res.json();
    // }).then((data) =>{
    //   setUser(data);
    //   // console.log(data)
    // })
    
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>hwllo</h1>
          {/* {
            // users?.map(user =>{
            <div>
              <h1>{user.name}</h1>
            </div>
            })
          } */}
        </header>
      </div>
    );
}

export default App;

