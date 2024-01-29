import { useState } from 'react';
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {

  const [lang, setLang] = useState("uz");

  return (
    <>
      <Header lang={lang} langSet={setLang} />
      <Hero lang={lang}/>
    </>
  )
}

export default App
