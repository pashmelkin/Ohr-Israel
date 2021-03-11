import React, { useContext} from 'react';
import Button from '@material-ui/core/Button';
import {PostAsync} from "../Infrastucture/CallApi";
import config from '../config.json';
import {AppContext} from "../Context/AppContextProvider";

export const ApplyButton = ()  =>  {

    const { isbn } = useContext(AppContext);
    const backEndUri = config.BackEndApi.url;

    return (
        <Button variant="contained" color="primary" onClick={() => PostAsync(backEndUri, isbn)}>
            Apply
        </Button>
    );
};


