import React, {useContext} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import {AppContext} from "../Context/AppContextProvider";


export const BookISBN = () => {

    const { setIsbn } = useContext(AppContext);

    const handleChange = (e) =>{
        setIsbn(e.target.value);
    };
    return (
            <Grid item xs={12}>
                <TextField
                    autoComplete="bookISBN"
                    name="BookISBN"
                    variant="outlined"
                    required
                    width={1/4}
                    id="BookISBN"
                    label="Book ISBN"
                    autoFocus
                    onChange={handleChange}
                />
            </Grid>
    );
}
