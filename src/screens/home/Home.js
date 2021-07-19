import { Grid, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Header from '../../../src/common/header/Header';
import './Home.css';

import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
//import CardComponent from './CardComponent';

export default function Home() {
    const [title, gettitleUrl] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        fetch("http://localhost:8085/api/v1/movies").then(
            response => response.json()).then((data) => {
                setIsLoaded(true);
                gettitleUrl(data.movies);
                console.log(data.movies)
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (<div className="main-heading">
            <Header />
            <div className="heading">
                Upcoming Movies
            </div>

            <div className="home-container">

                <div className="flex-container">
                    {
                        <Grid container >
                            {
                                title ? title.map((movie) => (
                                    <GridListTile key={movie.id} cols={6} cellheight={250} spacing={5}>
                                        <div className="img-grid">
                                            <img src={movie.poster_url} alt="" />
                                        </div>
                                        <div className="title-grid">
                                            <GridListTileBar title={movie.title}> </GridListTileBar>
                                        </div>

                                    </GridListTile >
                                ))
                                    : "Loading..."
                            }
                        </Grid>
                    }
                </div>
                <div className="movie-card-container">
                    {/* <CardComponent /> */}
                </div>



            </div >
        </div>
        )
    }
}



{/* <div className="released-movie-container">
                    <Grid container >
                        {
                            title ? title.map((movie) => (
                                <GridListTile key={movie.id} >
                                    <div className="img-grid">
                                        <img src={movie.poster_url} alt="" />
                                    </div>
                                    <GridListTileBar title={movie.title} subtitle={movie.release_date}></GridListTileBar>
                                </GridListTile >
                            ))
                                : "Loading..."

                        }
                    </Grid>
                </div> */}