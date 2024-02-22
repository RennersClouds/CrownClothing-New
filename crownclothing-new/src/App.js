import {Route, Routes} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";


const  App = () => {

 
  

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="auth" element={<Authentication />} />
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
