import React from 'react'
import Header from '../../components/Header'
import SingleShopLayout from '../../components/SingleShopLayout'
import { MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AllProducts from './AllProducts'
import { Parallax, Background } from 'react-parallax';
import NIkeLogo from '../../assets/images/nikeLogo.jpg'

import './singleShop.scss'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    input: {
        display: "none"
    },
    sort: {
        margin: "0 10px",
        boxSizing: "border-box"
    }
}));

export default function SingleShop() {
    const classes = useStyles()
    return (
        <div className="SingleShop">
            <Header />
            <SingleShopLayout>
                <Parallax
                    blur={10}
                    bgImageAlt="the cat"
                    strength={200}>
                    <div className="SingleShop_container_cover">
                        <div className="SingleShop_container_cover_box">
                            <div className="ShopCard_container_left_image_box">
                                <img src={NIkeLogo} alt="" />
                            </div>
                        </div>
                    </div>
                    <Background className="custom-bg">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="fill murray" />
                    </Background>

                </Parallax>
                <div className="SingleShop_container_bottom">
                    <div className="SingleShop_container_bottom_box">
                        <div className="SingleShop_container_bottom_box_left">
                            <div href="#/" class="SingleShop_container_bottom_box_left_btn">All products</div>
                            <div href="#/" class="SingleShop_container_bottom_box_left_btn">Playlists</div>
                            <div href="#/" class="SingleShop_container_bottom_box_left_btn">About</div>
                        </div>
                        <div className="SingleShop_container_bottom_box_right">
                            <div href="#/" class="SingleShop_container_bottom_box_right_btn">
                                <div className="SingleShop_container_bottom_box_right_btn_top">
                                    <div className="SingleShop_container_bottom_box_right_btn_top_container">
                                        <input id="searchBar" className="SingleShop_container_bottom_box_right_btn_top_container_searchbar" type="text" />
                                        <div className="SingleShop_container_bottom_box_right_btn_top_container_btn_search">
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SingleShopLayout_container_sort">
                    <Select
                        MenuProps={{ disableScrollLock: true }}
                        // style={classes.sort}
                        // value={selected}
                        // onChange={handleChange}
                        name="country"
                        displayEmpty
                        className={classes.sort}
                    >
                        <MenuItem value="">Date created</MenuItem>
                        <MenuItem value="US">Ascending</MenuItem>
                        <MenuItem value="UK">Descending</MenuItem>
                    </Select>
                </div>
                <AllProducts />
            </SingleShopLayout>
        </div>
    )
}
