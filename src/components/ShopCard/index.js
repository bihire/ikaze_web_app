import React, { Component } from 'react'
import NIkeLogo from '../../assets/images/nikeLogo.jpg'
import { IconButton, Popper, Paper, Grow, MenuItem, MenuList, ClickAwayListener } from '@material-ui/core';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Filter, RemoveRedEye, MoreHoriz, RadioButtonUnchecked, FiberManualRecord } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import history from '../../utils/helpers/history'
import './ShopCard.scss'

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
const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <FiberManualRecord />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <FiberManualRecord />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <FiberManualRecord />,
        label: 'Neutral',
    },
    4: {
        icon: <FiberManualRecord />,
        label: 'Satisfied',
    },
    5: {
        icon: <FiberManualRecord />,
        label: 'Very Satisfied',
    },
};
function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

const ShopCard = () => {
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
            <div className="ShopCard">
                <div className="ShopCard_container">
                    <div className="ShopCard_container_left">
                        <div className="ShopCard_container_left_image">
                            <div className="ShopCard_container_left_image_box">
                                <img src={NIkeLogo} alt="" />
                            </div>
                        </div>
                        
                    </div>
                    {/* <div className="ShopCard_container_right"> */}
                        <div className="ShopCard_container_right_top">
                            <div>
                                <h2 className="ShopCard_container_right_top_title" onClick={()=>history.push('/nike')}>My first shop</h2>
                            </div>
                            <div className="ShopCard_container_right_top_menu">
                                {/* <Box component="fieldset" mb={3} borderColor="red"> */}
                                    {/* <Typography component="legend">Custom icon set</Typography> */}
                                    <Rating
                                        name="customized-icons"
                                        defaultValue={2}
                                        precision={0.5}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        icon={<FiberManualRecord fontSize="inherit" />}
                                        // IconContainerComponent={IconContainer}
                                    />
                                {/* </Box> */}

                            </div>
                            <div className="ShopCard_container_right_top_subscribers">
                                <div className="ShopCard_container_right_top_subscribers_text">20 subs</div>
                            </div>
                            <div className="ShopCard_container_right_top_connect">
                                <div className="ShopCard_container_right_top_connect_text">connect +</div>
                            </div>
                        </div>
                        
                        {/* <div className="ShopCard_container_right_description">No, I’m not an offshore firm, nor a moonlighter, nor a recent graduate who cranks out throw-away websites for <span className="ShopCard_container_right_description_trancate_dots">...</span></div> */}
                        <div className="ShopCard_container_right_photo">
                            <div className="ShopCard_container_right_photo_container">
                                <div className="ShopCard_container_right_photo_container_item">
                                    <div className="ShopCard_container_right_photo_container_item_one"></div>
                                    <div className="ShopCard_container_right_photo_container_item_two"></div>
                                    <div className="ShopCard_container_right_photo_container_item_three"></div>
                                </div>
                                <div className="ShopCard_container_right_photo_container_item">
                                    <div className="ShopCard_container_right_photo_container_item_one"></div>
                                    <div className="ShopCard_container_right_photo_container_item_two"></div>
                                    <div className="ShopCard_container_right_photo_container_item_three"></div>
                                </div>
                                <div className="ShopCard_container_right_photo_container_item">
                                    <div className="ShopCard_container_right_photo_container_item_one"></div>
                                    <div className="ShopCard_container_right_photo_container_item_two"></div>
                                    <div className="ShopCard_container_right_photo_container_item_three"></div>
                                </div>
                            </div>
                            
                            
                        </div>
                        {/* <div className="ShopCard_container_right_views">
                            <div className="ShopCard_container_right_views_icon"><RemoveRedEye className="views_icon" /></div>
                            <div className="ShopCard_container_right_views_digits">12</div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        )
}

export default ShopCard
