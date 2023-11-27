import NavBar from "./Components/NavBar.jsx";
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Projects from "./Views/Projects";
import Skills from "./Views/Skills";
import State from "./context/state.jsx";

function App() {
    return (
        <State>
            <NavBar />
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </State>
    )
};

export default App;