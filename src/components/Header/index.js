import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/woman-draw.jpg'
import './header.scss'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {IconButton, Avatar, Badge } from '@material-ui/core';
import { DirectionsBus, Explore } from '@material-ui/icons';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { KeyboardBackspace } from '@material-ui/icons';
// import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        
    },
    iconColor: {
        color: "#000"
    }
}));
const styles = {
    button: {
        width: 34, height: 34,
        padding: 0
    },
    icon: {
        fontSize: 26,
        color: '#000'
    },
    tooltip: {
        marginLeft: 7
    }
};

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

const Header = ()=> {
        const classes = useStyles();
        useEffect(() => {
            window.onscroll = function () {
                const maxHeight = 100;
                const minHeight = 56;
                let pixel = window.scrollY;
                let pixelPosition = maxHeight - pixel;
                pixelPosition = pixelPosition > maxHeight ? maxHeight : pixelPosition;
                pixelPosition = pixelPosition < minHeight ? minHeight : pixelPosition;
                document
                    .getElementById("header_container")
                    .setAttribute("style", "height:" + pixelPosition + "px");
            };
        });


        return (
            <div className="header">
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                    integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
                    crossOrigin="anonymous"
                />
                <div id="header_container" className="header_container">
                    <div className="header_container_content">
                        <div className="header_container_content_logo">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="header_container_content_middle">
                            <div className="header_container_content_middle_top">
                                <div className="header_container_content_middle_top_container">
                                    <input id="searchBar" className="header_container_content_middle_top_container_searchbar" type="text" placeholder="shakishiriza hano..." />
                                    <div className="header_container_content_middle_top_container_btn_search">
                                        <i className="fa fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header_container_content_right">
                            <div className={classes.root}>
                                <IconButton className={classes.iconColor} aria-label="delete">
                                    <DirectionsBus />
                                </IconButton>
                                <IconButton className={classes.iconColor} aria-label="delete">
                                    <Explore/>
                                </IconButton>
                                <IconButton className={classes.iconColor} aria-label="add an alarm">
                                    <AlarmIcon />
                                </IconButton>
                                <IconButton className={classes.iconColor} aria-label="add to shopping cart">
                                    <AddShoppingCartIcon />
                                </IconButton>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </StyledBadge>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SingleShopLayout_container_top">
                    <div className="SingleShopLayout_container_top_box">
                        <IconButton style={styles.button}>
                            <KeyboardBackspace style={styles.icon} />
                        </IconButton>
                    </div>
                </div> 
            </div>
        )
    
}

export default Header