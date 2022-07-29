import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Banner from "../img/banner1.jpg"

import Bomba from "../img/photo1.jpg"
import Filtro1 from "../img/photo2.jpg"
import Filtro2 from "../img/photo3.jpg"
import Filtro4 from "../img/photo4.jpg"
import Filtro5 from "../img/photo5.jpg"
import AspiradorFundo from "../img/photo6.jpg"




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar background ='pink' position="relative">
        <Toolbar className='Back'>
          <Typography className='Back' variant="h6"  color="inherit" noWrap>
Moda Infantil Feminina         </Typography>
        </Toolbar>
      </AppBar>
      <main className="ListaPrincipal">
        {/* Hero unit */}
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bomba} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>

            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>           
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro1} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro2} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>

            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card  className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro4} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>


            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
        
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro5} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>       
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={AspiradorFundo} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card> 

           
        
        
      </main>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
        Moda Infantil Masculina  
          </Typography>
        </Toolbar>
      </AppBar>

      <section className="ListaPrincipal"> 
      <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bomba} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>

            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>           
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro1} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro2} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>

            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card  className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro4} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>


            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
        
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Filtro5} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>       
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={AspiradorFundo} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
      </section>

    


    </ThemeProvider>
  );
}