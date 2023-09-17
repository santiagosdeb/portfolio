import NavBar from "./Components/NavBar.jsx";
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Projects from "./Views/Projects";
import Skills from "./Views/Skills";


function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
};

export default App;