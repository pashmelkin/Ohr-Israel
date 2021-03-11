import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export const TagsCard = (bookTags) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            {bookTags}
        </Card>
    );
}
