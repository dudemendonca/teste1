import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import AddIcon from '@material-ui/icons/Add';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


function App() {
    const classes = useStyles();

    const [produtos, setProdutos] = useState([
      {id:1, nome:'Apple 1', preco:5000.00 , quantidade:0},
      {id:2, nome:'Xiaomi', preco:3000.00 , quantidade:0},
      {id:3, nome:'Samsung', preco:4000.00 , quantidade:0},
      {id:4, nome:'Motorola', preco:3000.00 , quantidade:0},
    ]);
    function AddProduto(idP){    
      
      const newProduto = produtos.map(r=>{
          return r.id == idP? {... r, quantidade: r.quantidade+1} :r;
      });
      setProdutos(newProduto);
    }
    function RemoveProduto(idP){    
      
      const newProduto = produtos.map(r=>{
          return r.id == idP && r.quantidade>0? {... r, quantidade: r.quantidade-1} :r;
      });
      setProdutos(newProduto);
    }

    // const [compras, setCompras] = useState([      
    // ]);
    // useEffect(()=>{
    //       //poderia ser buscado via Axios por exemplo 
    //       //response =produtos;
    //       data = produtos;
    // }, []);

    //
    function handleAddCar(){
      setProdutos([
        ... produtos,
        {id:5, nome:'Positivo', preco:200000, quantidade:0},
      ]);
    }

  const total = produtos.reduce((resultado, teste) => {
    return (resultado + (teste.preco*teste.quantidade) );
}, 0).toLocaleString('pt-br', {minimumFractionDigits: 2});

  
  return (    
    <div className={classes.root}>
      <FormGroup row>
        {}
        {}
      </FormGroup>
     <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Lista de produtos a venda
          </Typography>
          <div className={classes.demo}>
            <List produto={produtos}>
              { produtos.map(r=> 
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SettingsCellIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                   primary= {r.nome}
                  // { quantidade ? 'Secondary text' : null}
                  />
                  <ListItemText
                   primary= {r.preco.toLocaleString('pt-br', {minimumFractionDigits: 2})}
                  // { quantidade ? 'Secondary text' : null}
                  />
                   <ListItemText
                   primary= {r.quantidade}
                  // { quantidade ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Comprar" onClick={() => AddProduto(r.id)}>
                      <AddIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="Comprar" onClick={() => RemoveProduto(r.id)}>
                      <RemoveIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                  
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
  

      
      <label htmlFor="contained-button-file">        
        <Button variant="contained" color="primary" component="span" onClick={() => { alert('Finalizado') }}>Finalizar</Button>
        <IconButton aria-label="cart"
 variant="contained" color="secondary" component="span" ><ShoppingCartIcon /> Total a pagar  R${total} </IconButton>
       
      </label>
      </div>
    );
}

export default App;
