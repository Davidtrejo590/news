import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

/* Estilos usados por 'Progress' */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: theme.spacing(90),
    marginTop: theme.spacing(10)
  },
}));

/* Progress renderiza un progress circular */
const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

export default Progress;