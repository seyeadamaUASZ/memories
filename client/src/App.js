import React,{useEffect} from 'react';
import {Container,AppBar,Typography,Grid,Grow} from '@material-ui/core';
import memories from './images/memories.png';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[])

  return (
      <Container maxidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
             <img className={classes.image} src={memories} alt="memories" height="60"/>
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justifyContent ="space-between" alignItems="stretch" spacing={4}>
                   <Grid item xs={12} sm={7}>
                     <Posts/>
                   </Grid>
                   <Grid item xs={12} sm={4}>
                      <Form/>      
                   </Grid>
              </Grid>
            </Container>
          </Grow>
      </Container>
  );
};

export default App;