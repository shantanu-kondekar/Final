import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';


// const theme = createMuiTheme({
//     palette: {
//         primary: blue
//     }
// })


export default function MovieCard() {

    return (
            <Card >
                <CardHeader title={"FIND MOVIES BY:"} />

                <CardContent>
                    <form className="move-card-form">
                        <label htmlFor="name" className="label-control">Movie Name: </label><br />
                        <input id="name" type="text" className="input-control" name="Movie Name" /><br /><br />

                        <label htmlFor="name" className="label-control">Genres: </label><br />
                        <input id="name" type="text" className="input-control" name="Genres" /><br /><br />

                        <label htmlFor="name" className="label-control">Artists: </label><br />
                        <input id="name" type="text" className="input-control" name="Artists" /><br /><br />

                        <label htmlFor="name" className="label-control">Release Date Start: </label><br />
                        <input id="name" type="text" className="input-control" name="Release Date Start" /><br /><br />

                        <label htmlFor="name" className="label-control">Release Date End: </label><br />
                        <input id="name" type="text" className="input-control" name="Release Date End" /><br /><br />

                        <label htmlFor="name" className="label-control">Release Date End: </label><br />
                        <input id="name" type="text" className="input-control" name="Release Date End" /><br /><br />

                    </form>
                </CardContent>

                <CardActions>
                    <Button size="small">Apply</Button>
                </CardActions>


            </Card>
    );
}