import { useState } from 'react';
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CardNews from './components/Card-News/Card-News';
import BestSeller from './components/BestSellerCards/BestSeler';
import Collection from './components/CollectionCards/Collection';
import Banner from './components/TexnomartBanner/Banner';
import Amenities from './components/TexnomartAmenities/Amenities';


function App() {

  const [lang, setLang] = useState("uz");

  return (
    <>
      <Header lang={lang} langSet={setLang} />
      <Hero lang={lang}/>
      <CardNews />
      <BestSeller />
      <Collection />
      <Banner />
      <Amenities />
      
    </>
  )
}

export default App
