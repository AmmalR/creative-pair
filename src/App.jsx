import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <div className="bg-brand-dark text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectdetail" element={<ProjectDetail />} />
        {Projects.map((project) => (
          <Route
            key={project.id}
            path={`/project/${project.id}`}
            element={<ProjectDetail projectId={project.id} />}
          />
     ))}
      </Routes>
    </div>
  )
}
export default App
