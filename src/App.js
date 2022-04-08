import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home, Cuadro, Contact, Jugadores} from './pages';
import { Nav } from './layout';

import {JugadoresDt } from './data.js'

function App() {
  return (
    <div className="bg-yellow-400">
      <Router>
        <Nav/>
          <div >
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cuadro' element={<Cuadro />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cuadro/Kevin' element={<Jugadores name="Kevin Dawson" />} />
          <Route exact path='/cuadro/Gio' element={<Jugadores name="Giovanni Gonzalez" />} />
          <Route exact path='/cuadro/Tito' element={<Jugadores name="Fabricio Formiliano" />} />
          <Route exact path='/cuadro/Gary' element={<Jugadores name= "Gary Kagelmacher" />} />
          <Route exact path='/cuadro/Joaco' element={<Jugadores name="Joaquin Piquerez" />} />
          <Route exact path='/cuadro/Mota' element={<Jugadores name="Walter Gargano" />} />
          <Route exact path='/cuadro/Jesus' element={<Jugadores name="Jesus Trindade" />} />
          <Route exact path='/cuadro/Agu' element={<Jugadores name="Agustin Canobbio" />} />
          <Route exact path='/cuadro/Pablo' element={<Jugadores name="Pablo Ceppelini" />} />
          <Route exact path='/cuadro/Facu' element={<Jugadores name="Facundo Torres" />} />
          <Route exact path='/cuadro/Gol' element={<Jugadores name="Agustin Alvarez Martinez" />} />
          </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
