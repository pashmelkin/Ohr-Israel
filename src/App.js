import {ApplyButton} from "./Components/ApplyButton";
import Grid from '@material-ui/core/Grid';
import React, {useContext} from 'react';
import {BookISBN} from "./Components/BookISBN";
import Container from "@material-ui/core/Container";
import {AppContext} from "./Context/AppContextProvider";


function App() {
    const { isbn } = useContext(AppContext);

    return (
        <Container maxWidth="lg">
            <div>
                <br />

                <Grid container spacing={1}>
                    <Grid container spacing={1}>
                        <BookISBN value={isbn}/>
                    </Grid>
                        <ApplyButton />
                </Grid>
            </div>
        </Container>
  );
}

export default App;


