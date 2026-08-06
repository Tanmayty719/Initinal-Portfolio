import {
  ScrollProgress,
  MouseGlow,
  Button,
  Navbar,
  Hero,
  TechStack,
  About,
  Skills,
  Experience,
  Projects,
 // Github,
  Education,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <ScrollProgress />
      <Button />
      <MouseGlow />  
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <Github /> */}
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;