import './App.css'
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
      </div>
    </>
  )
}

export default App
