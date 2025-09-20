import  NavBar from "./NavBar.jsx"
import SignIn from "./SignIn.jsx"
import Home from "./Home.jsx"
import SignUp from "./SignUp.jsx"
import {Routes,Route} from'react-router-dom'
function App() {


  return (
    
    <Routes> 
       <Route  path="/SignUp" element={<SignUp/>}/> 
        <Route path="/SignIn" element={<SignIn/>}/>
       <Route path="/Home" element={<Home/>}/>   
       

      </Routes>
      
  )
}

export default App
