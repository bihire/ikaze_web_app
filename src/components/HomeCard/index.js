import React, { Component } from 'react'
import NIkeLogo from '../../assets/images/nikeLogo.jpg'
import { IconButton, Popper, Paper, Grow, MenuItem, MenuList, ClickAwayListener } from '@material-ui/core';
import { Filter, RemoveRedEye, MoreHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import history from '../../utils/helpers/history'
import './homeCard.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    moreOption: {
        zIndex: 3,

    }
}));

const HomeCard = () => {
    const classes = useStyles();
    const[open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
    }
}

// return focus to the button when we transitioned from !open -> open
const prevOpen = React.useRef(open);
React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
    }

    prevOpen.current = open;
}, [open]);

        return (
            <div className="HomeCard">
                <div className="HomeCard_container">
                    <div className="HomeCard_container_left">
                        <div className="HomeCard_container_left_image">
                            <img src={NIkeLogo} alt="" />
                        </div>
                        
                    </div>
                    <div className="HomeCard_container_right">
                        <div className="HomeCard_container_right_top">
                            <div>
                                <h2 className="HomeCard_container_right_top_title" onClick={()=>history.push('/nike')}>This the title of Nike shoe</h2>
                                <div className="HomeCard_container_right_price">
                                    <div className="HomeCard_container_right_price_old">13.00$</div>
                                    <div className="HomeCard_container_right_price_new">12.00$</div>
                                </div>
                            </div>
                            <div className="HomeCard_container_right_top_menu">
                                <IconButton
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                >
                                    <MoreHoriz />

                                </IconButton>
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.moreOption} placement="left"
                                    disablePortal={false}
                                    modifiers={{
                                        flip: {
                                            enabled: true,
                                        },
                                        preventOverflow: {
                                            enabled: true,
                                            boundariesElement: 'scrollParent',
                                        },
                                        arrow: {
                                            enabled: true,
                                            // element: anchorRef,
                                        },
                                    }}>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === '' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                                    
                            </div>
                        </div>
                        <div className="HomeCard_container_right_description">No, I’m not an offshore firm, nor a moonlighter, nor a recent graduate who cranks out throw-away websites for <span className="HomeCard_container_right_description_trancate_dots">...</span></div>
                        <div className="HomeCard_container_right_photo">
                            <div className="HomeCard_container_right_photo_overlay">
                                <Filter />
                            </div>
                            <div className="HomeCard_container_right_photo_container">
                                <div className="HomeCard_container_right_photo_container_item"></div>
                                <div className="HomeCard_container_right_photo_container_item"></div>
                                <div className="HomeCard_container_right_photo_container_item"></div>
                            </div>
                            
                            
                        </div>
                        <div className="HomeCard_container_right_views">
                            <div className="HomeCard_container_right_views_icon"><RemoveRedEye className="views_icon" /></div>
                            <div className="HomeCard_container_right_views_digits">12</div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default HomeCard
