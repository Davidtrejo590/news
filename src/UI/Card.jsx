import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

/* Estilos aplicados al Componente 'Card' */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
        borderRadius: '5px'
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'inline',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius:'5px'
    },
    button: {
        backgroundColor: '#fff',
        color: '#0066FF',
        '&:hover': {
          backgroundColor: '#0066FF',
          color: '#fff',
      },
    }
}));

/* Textos */
const authorNotFound = 'Autor no Encontrado';
const seeMore = 'Ver más';

/* 
    Componente 'Card' para mostrar la información de cada
    uno de los items (noticias) recuperadas de la API
    Recibe como parámetro (props) la información de cada item
*/
const Card = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={2}>
                    <Grid item>
                        {/* Imágen de la Noticia, Redirecciona al sitio que p¿ublica la noticia */}
                        <ButtonBase className={classes.image} href={props.url} target='blank'>
                            <img className={classes.img} alt="complex" src={props.urlImage} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                {/* Título de la Noticia */}
                                <Typography gutterBottom variant="h6">
                                    {props.title}
                                </Typography>
                                {/* Descripción de la Noticia */}
                                <Typography variant="subtitle2" gutterBottom>
                                    {props.description}
                                </Typography>
                                {/* Autor de la Noticia - Válida si existe autor */}
                                { props.author ? 
                                        <Typography variant="subtitle2" color="inherit">{props.author}</Typography> 
                                    : 
                                        <Typography variant="subtitle2" color="inherit">{authorNotFound}</Typography>
                                }
                                <Typography variant="body2" color="textSecondary">
                                    {/* Fecha de la Noticia */}
                                    {props.date}
                                </Typography>
                            </Grid>
                            {/* Botón que redirecciona hacia el sitio de la noticia */}
                            <Grid item>
                                <Button className={classes.button} href={props.url} target='blank'>{seeMore}</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <br/>
        </div>
    );
}

export default Card;
