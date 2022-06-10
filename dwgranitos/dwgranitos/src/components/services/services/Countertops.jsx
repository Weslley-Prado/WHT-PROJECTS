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
import './Sinks.css'

import Bancada01 from '../../../img/imgdwgranitos/bancada01.png';
import Bancada02 from '../../../img/imgdwgranitos/bancada02.png';
import Bancada03 from '../../../img/imgdwgranitos/bancada03.png';
import Bancada04 from '../../../img/imgdwgranitos/bancada04.png';
import Bancada05 from '../../../img/imgdwgranitos/bancada05.png';
import Bancada06 from '../../../img/imgdwgranitos/bancada06.png';
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
           Countertops
          </Typography>
        </Toolbar>
      </AppBar>

      <main className="ListaPrincipal">
        {/* Hero unit */}
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bancada01} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bancada02} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bancada03} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bancada04} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bancada05} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Bancada06} />
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