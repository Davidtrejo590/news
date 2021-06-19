import { Component } from 'react';
import News from './Components/News';
import Layout from './UI/Layout';

/* Componente Principal */
class App extends Component{
  render(){
    return(
      /* 
        Renderiza el Layout Pricipal, Contiene el Componente 'News' y el botón de 'Refresh'
      */
      <Layout>
        <News></News>
      </Layout>
    );
  }
}

export default App;
