import React from 'react'
import NIkeLogo from '../../../assets/images/nikeLogo.jpg'
// import Header from '../../components/Header'
// import MainLayout from '../../components/MainLayout'
import ChipInput from 'material-ui-chip-input'
import { Filter, RemoveRedEye, MoreHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AddPaper from '../AddPaper';
import SingleImageUploader from '../../../components/SingleImageUploader'
import ImageUploader from '../../../components/ImageUploader'
import SingleInput from '../../../components/InputField'
import TextArea from '../../../components/TextArea'
import AddPrice from './AddPrice'
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
                    {/* <h2 className="AddProductLayout_container_title_text">Add a new product</h2> */}
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
                <AddPaper title="Product name">
                    <SingleInput />
                </AddPaper>
                <AddPaper title="Upload cover image or video">
                    <div className="ProductDetail_container_main_photo">
                        <div className="ProductDetail_container_main_photo_container">
                            <div className="ProductDetail_container_main_photo_container_item">
                                <SingleImageUploader
                                // setState={setTheState}
                                // urls={currentState.urls}
                                // files={currentState.files}
                                // isDragging={currentState.isDragging}
                                // error={error}
                                />
                            </div>
                        </div>
                    </div>
                    
                </AddPaper>
                <AddPaper title="Description">
                    <textarea
                        className="AddProductLayout_container_description_textarea"
                        placeholder="Remember, be nice!"
                        
                    />
                </AddPaper>
                <AddPaper title="Upload supporting images">
                    <div className="ProductDetail_container_main_photo">
                        <ImageUploader
                        // setState={setTheState}
                        // urls={currentState.urls}
                        // files={currentState.files}
                        // isDragging={currentState.isDragging}
                        // error={error}
                        />
                    </div>
                   
                </AddPaper>
                <AddPaper title="Available sizes">
                    <div className="AddProductLayout_container_sizes">
                        
                        <ChipInput
                        defaultValue={['foo', 'bar']}
                        fullWidthInput={true}
                        disableUnderline={true}
                        // onChange={(chips) => handleChange(chips)}
                        />
                    </div>
                </AddPaper>
                <AddPaper title="Prices">
                    <div className="AddProductLayout_container_prices">
                       <AddPrice />
                    </div>
                </AddPaper>
                <AddPaper title="Tags">
                    <div className="AddProductLayout_container_sizes">

                        <ChipInput
                            defaultValue={['foo', 'bar']}
                            fullWidthInput={true}
                            disableUnderline={true}
                        // onChange={(chips) => handleChange(chips)}
                        />
                    </div>
                </AddPaper>
            </div>
        </div>
    )
}
