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
import './Pia.css'

import Pia01 from '../../../img/imgdwgranitos/Pia01.png';
import Pia02 from '../../../img/imgdwgranitos/pia02.png';
import Pia03 from '../../../img/imgdwgranitos/pia03.png';
import Pia04 from '../../../img/imgdwgranitos/pia04.png';
import Pia05 from '../../../img/imgdwgranitos/pia05.png';
import Pia06 from '../../../img/imgdwgranitos/pia06.png';
import Menu from '../../templates/Menu';
import Footer from '../../templates/Footer';





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
    <Menu />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" className="linha" >
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap>
           Pias
          </Typography>
        </Toolbar>
      </AppBar>

      <main className="ListaPrincipal">
        {/* Hero unit */}
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Pia01} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Pia02} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Pia03} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Pia04} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Pia05} />
          <Card.Body>
            {/* <Card.Title>Aquecedor Elétrico TermaMax 01 Nautilus Monofásico 220V</Card.Title>
            <Card.Text>
                 Ideal para piscinas residenciais ou comerciais de uso coletivo, é produzida com polietileno e proteção anti-UV, o que a torna resistente às ações climáticas das áreas externas.

            </Card.Text> */}
            {/*<Button variant="primary">Go somewhere</Button>*/}
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img className="Bomba" variant="top" src={Pia06} />
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
    <Footer />
    </div>
  );
}