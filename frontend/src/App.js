
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/app/Header"
import Navi from "./Components/app/Navi"
import Main from "./Components/app/Main"
import Footer from "./Components/app/Footer"
import AuthProvider from "./Components/context/AuthProvider"
import HttpHeadersProvider from "./Components/context/HttpHeadersProvider"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <HttpHeadersProvider>
            <Navi />
            <Main />
          </HttpHeadersProvider>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
