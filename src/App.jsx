import './App.css'
import Competence from './components/Competence'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import Section from './components/Section'
import Service from './components/Service'

function App() {
  

  return (
    <>
      <div style={{backgroundColor:'#0f111a'}}>
         <Section>
          <Header></Header>
        </Section>

        <Section>
          <Hero></Hero>
        </Section>
       
        <Section>
          <div className='info-container' >
            <Education></Education>
            <Experience></Experience>
          </div>
          <Service></Service>
        </Section>

        <Section>
          <Competence></Competence>
        </Section>

        <Section>
          <Project></Project>
        </Section>

        <Section>

            <Contact></Contact>
          </Section>

          <Footer></Footer>
      </div>
    </>
  )
}

export default App
