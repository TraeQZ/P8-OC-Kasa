import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AppRouter from "./Components/Router/Router";

function App() {
  return (
   <BrowserRouter>
      <div className="App"> {/* Le conteneur Flex principal */}
        <Header />
        
        {/* Le composant AppRouter DOIT être un conteneur Flex */}
        {/* On lui donne une classe pour l'étirer */}
        <main className="content"> 
            <AppRouter /> {/* Change selon l'URL */}
        </main>
       <Footer />

      </div>

       </BrowserRouter>
  );
}

export default App;
