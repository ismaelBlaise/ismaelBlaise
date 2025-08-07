import './App.css'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'

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
        </Section>
      </div>
    </>
  )
}

export default App
