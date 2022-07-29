import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Bomba from "../img/photo1.jpg"
import Filtro1 from "../img/photo2.jpg"
import Filtro2 from "../img/photo3.jpg"
import Filtro4 from "../img/photo4.jpg"
import Filtro5 from "../img/photo5.jpg"
import AspiradorFundo from "../img/photo6.jpg"
import M1 from "../img/M1.jpg"
import M2 from "../img/M2.jpg"
import M3 from "../img/M3.jpg"
import M4 from "../img/M4.jpg"
import M5 from "../img/M5.jpg"
import M6 from "../img/M6.jpg"




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
          <Card.Img className="Bomba" variant="top" src={M1} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={M2} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>

            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>

        <Card  className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={M4} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>


            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
        
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={M5} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>       
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={M6} />
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