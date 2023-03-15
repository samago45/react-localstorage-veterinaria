import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPasiente from "./components/ListadoPasiente";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <div>
        <Header />

        <div className="mt-12 md:flex">
          <Formulario />
          <ListadoPasiente />
        </div>
      </div>
    </div>
  );
}

export default App;
