import { Component } from 'react';
import axios from 'axios';
import Card from '../UI/Card';
import Progress from '../UI/Progress';

/* URL para realizar la petición GET */
const newsUrl = 'http://api.mediastack.com/v1/news?access_key=9c852e6a4f5bd1563d6ee5c1de8b386f&countries=mx';

class News extends Component{

    /* 
        Definición de un estado - contiene los datos recuperados de la API 
        'data': Datos recuperados en formato Json
        'error': Error ocurrido durante la petición
    */
    state = { data: null, error: null };

    /* 
        Método para realizar una petición GET a  News-API, hace uso de 'axios' para hacer la petición GET 
    */
    fetchData( url ){
        axios.get( url )
            .then( response => {
                /* 
                    Si se completa la petición se destructuran la información para usar solo la requerida 
                */
                console.log('Data', response.data.data);
                const news = response.data.data;
                const modNews = news.map( (modNew) => {
                    return{ 
                            title: modNew.title,
                            author: modNew.author,
                            description: modNew.description, 
                            date: modNew.published_at, 
                            urlImage: modNew.image,
                            url: modNew.url
                        }
                });
                /* Guarda los nuevos datos en 'data' */
                this.setState({ data: modNews, error: null});
                console.log('Mod News', this.state.data);

            })
            .catch( error => {
                /* 
                    En caso de error guarda 'null' en data 
                */
                this.setState({ data: null, error: error});
            })
    }

    /* Método que ejcuta la petición a la API cuando se inicia la página o se recarga */
    componentDidMount(){
        this.fetchData(newsUrl);
    }

    /* 
        Método para Desplegar la información de cada noticia (item) en un Componente llamado 'Card'
        Devuelve un Componente 'Card' para cada uno de los items recuperados.  
    
    */
    renderSuccess(){
        const dataJsx = this.state.data?.map( (item) => {
            return <Card
                key={item.key}
                title={this.cutStringByCharacter(item.title, '-')}
                description={item.description}
                author={item.author}
                date={this.cutStringByCharacter(item.date, 'T')}
                urlImage={item.urlImage}
                url={item.url}
            />
        })
        return dataJsx;
    }

    /* Método para obtener solo una porción de un String */
    cutStringByCharacter( word, character ){
        const index = word.indexOf(character);
        const newWord = word.slice(0, index);
        return newWord;
    }

    /* 
        Método encargado de renderizar el contenido del Componente 'News' 
        Si los datos que devuelve la API han sido guardados en el objeto state llama al método
        renderSuccess() para desplegarlos.
        En caso contrario renderiza un Progress hasta que los datos esten listos.
    */
    render(){
        if( this.state.data ){
            return this.renderSuccess()
        }else{
            return <Progress></Progress>
        }
        /* return(
            <div>Hello World</div>
        ); */
        
    }
}

export default News;