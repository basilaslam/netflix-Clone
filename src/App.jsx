import React from 'react'
import Row from './components/Row'
import requests from "./request";
import '../src/App.css'
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
    <div className="app">

      <Nav/>
      <Banner fetchUrl={requests.fetchTopRated}/>
      <Row title='NETFLIX ORIGINALS' 
      fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}/>
      <Row title='Trending Now'fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated'fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies'fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies'fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies'fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies'fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries'fetchUrl={requests.fetchDocumentaries}/>

    </div> 
  );
}

export default App;