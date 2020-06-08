import React from 'react'
import NIkeLogo from '../../../assets/images/nikeLogo.jpg'
// import Header from '../../components/Header'
// import MainLayout from '../../components/MainLayout'
import { Filter, RemoveRedEye, MoreHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AddPaper from '../AddPaper';
import './addProductLayout.scss'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px 10px",
        boxSizing: 'border-box',
        // display: 'flex',
        // flexWrap: 'wrap',
        '& > *': {
            // margin: theme.spacing(1),
            width: "100%",
            height: theme.spacing(16),
        },
    },
}));

export default function AddProductLayout() {
    const classes = useStyles();
    return (
        <div className="AddProductLayout">
            <div className="AddProductLayout_container">
                <div className="AddProductLayout_container_title">
                    <h2 className="AddProductLayout_container_title_text">Add a new product</h2>
                    <div className="AddProductLayout_container_title_shop">
                        <div className="AddProductLayout_container_title_shop_gravatar">
                            <img src={NIkeLogo} alt="" />
                        </div>
                        <div className="AddProductLayout_container_title_shop_detail">
                            <a href="/#">Nike shop</a>
                            <div className="Shop_detal_card">
                                <div className="Shop_detal_card_connects">12</div>
                                <div className="Shop_detal_card_text">connects</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <AddPaper />
                
            </div>
        </div>
    )
}
