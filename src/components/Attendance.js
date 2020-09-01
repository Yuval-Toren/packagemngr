import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Attendance() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h4" align = 'right' component="h2" gutterBottom>
                    נוכחות היום
                </Typography>
                <Typography variant="subtitle2" align = 'right' gutterBottom>
                    TBD
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default Attendance;