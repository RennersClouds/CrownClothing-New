import {Route, Routes} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";


const  App = () => {

 
  

  return (


    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route path="sign-in"  element={<SignIn/>} />
        <Route index element={<Home />} />  
        <Route path="shop" element={<Shop/>}/>
        

      </Route>

    </Routes>

)
}

export default App;
