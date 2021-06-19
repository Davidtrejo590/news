import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/* Estilos utilizados dentro del Coponente 'Layout' */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#FBFCFC'
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    fontFamily:'Courier',
    fontSize:'18px',
    fontWeight:'bold',
    color:'black'
  },
  button: {
    backgroundColor: '#fff',
    color: '#0066FF',
    '&:hover': {
      backgroundColor: '#0066FF',
      color: '#fff',
  }
},
}));

/* Textos */
const news = 'Noticias';
const refresh = 'Actualizar';

/* Función para recargar la página */
const reload = () => {
    window.location.replace('');
}

/* Componente Layout */
const Layout = ( props ) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.paper} item xs={12}>
            <Paper elevation={0}>{news}</Paper>
            {/* Botón para recargar la página - llama a la función 'reload()' cuando escucha un Click */}
            <Paper elevation={0}><Button className={classes.button} onClick={reload}>{refresh}</Button></Paper>
        </Grid>
        <Grid item xs={12}>
          {/* Renderiza el Componente hijo dentro de 'Layout' */}
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
