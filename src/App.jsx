import { useState } from 'react';
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CardNews from './components/Card-News/Card-News';

function App() {

  const [lang, setLang] = useState("uz");

  return (
    <>
      <Header lang={lang} langSet={setLang} />
      <Hero lang={lang}/>
      <CardNews />
    </>
  )
}

export default App
