import React from 'react';
import Button from '@material-ui/core/Button';
import {CheckISBN} from "../MiddleWare/CallBooks";

export const CheckISBNButton = (props)  =>  {

    return (
        <Button variant="contained" color="primary"  onClick={e => CheckISBN ( props.isbn )}>
            Check ISBN Code
        </Button>
    );
};
