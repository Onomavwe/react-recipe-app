import React from 'react'
import Container from '../components/container/Container'
import Header from '../components/header/Header'
import Main from '../components/main/Main';
import Footer from "../components/footer/Footer";
import Search from '../components/search/Search';
import Hero from '../components/hero/Hero';
import Recipe from '../components/recipe/Recipe';

const Home = () => {
  return (
    <div>
      <Container>
        <Header />
        <Main>
          <Search />
          <Hero />
          <Recipe />
        </Main>
        <Footer />
      </Container>
    </div>
  );
}

export default Home