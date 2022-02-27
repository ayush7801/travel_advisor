import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box, useMediaQuery } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
const Header = ({ setCoords }) => {
    const classes = useStyles();
    const [autocomplete,setAutoComplete] = useState(null);
    
    const isDesktop = useMediaQuery('(min-width:600px)');

    const onLoad = (autoC) => {console.log({autoC});
        setAutoComplete(autoC)};

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoords({ lat, lng });
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                {isDesktop ? 
                    <div className={classes.logo}>
                        <img src="https://img.icons8.com/color/48/000000/around-the-globe.png" alt="Travel Advisor"></img>
                        <Typography variant="h5">Travel Advisor</Typography>
                    </div>
                    :
                    <img src="https://img.icons8.com/color/48/000000/around-the-globe.png" alt="Travel Advisor"></img>
                }
                <Box display="flex" alignItems="center" justifyContent="center">
                    
                    { isDesktop ? <Typography variant="h6">Explore new Places</Typography>
                        : null
                    }
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{ root: classes.inputRoot, input: classes.inputInput }}
                        />
                    </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
