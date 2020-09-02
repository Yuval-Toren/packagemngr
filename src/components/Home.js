import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Home() {

    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Typography variant="h4" align = 'right' component="h2" gutterBottom>
          ברוכים הבאים
        </Typography>
        <Typography variant="subtitle2" align = 'right' gutterBottom>
          לחצו על הקישורים בצד למעבר בין האפשרויות השונות
        </Typography>
      </Container>
    </React.Fragment>
    );
}

export default Home;