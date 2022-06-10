import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from 'react-bootstrap/Card';


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
import './Sinks.css'

import Piso01 from '../../../img/imgdwgranitos/piso01.png';
import Piso02 from '../../../img/imgdwgranitos/piso02.png';
import Piso03 from '../../../img/imgdwgranitos/piso03.png';
import Piso04 from '../../../img/imgdwgranitos/piso04.png';
import Piso05 from '../../../img/imgdwgranitos/piso05.png';
import Piso06 from '../../../img/imgdwgranitos/piso06.png';
import MenuEnglish from '../../templates/MenuEnglish';





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
    <div>
    <MenuEnglish />
     

    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      <AppBar position="relative" className="linha" >
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap>
           Floor
          </Typography>
        </Toolbar>
      </AppBar>

      <main className="ListaPrincipal">
        {/* Hero unit */}
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Piso01} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Piso02} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Piso03} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Piso04} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Piso05} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Piso06} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        </main>     
       

    </ThemeProvider>
    </div>    

  );
}