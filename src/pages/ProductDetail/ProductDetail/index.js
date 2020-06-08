import React from 'react'
// import { IconButton, Popper, Paper, Grow, MenuItem, MenuList, ClickAwayListener } from '@material-ui/core';
import { Filter, RemoveRedEye, MoreHoriz } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core/styles';
import history from '../../../utils/helpers/history'
import NewGallery from '../Gallery'
import Recommendations from '../Recommendations'
import './productDetail.scss'

export default function index() {
    return (
        <div className="ProductDetail">
            <div className="ProductDetail_container">
                <div>
                    <h2 className="ProductDetail_container_title">This the title of Nike shoe</h2>
                </div>
            </div>
            <div className="ProductDetail_container_views">
                <div className="ProductDetail_container_views_icon"><RemoveRedEye className="views_icon" /></div>
                <div className="ProductDetail_container_views_digits">12</div>
            </div>
            <div className="ProductDetail_container_price">
                <div className="ProductDetail_container_price_old">13.00$</div>
                <div className="ProductDetail_container_price_new">12.00$</div>
            </div>
            <div className="ProductDetail_container_description">
                No, I’m not an offshore firm, nor a moonlighter, nor a recent graduate who cranks out throw-away websites for Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium laboriosam sit quos rem molestias illo.
            </div>
            <div className="ProductDetail_container_main_photo">
                <div className="ProductDetail_container_main_photo_container">
                    <div className="ProductDetail_container_main_photo_container_item"></div>
                </div>
            </div>
            <div className="ProductDetail_container_sizes">
                <h2 className="ProductDetail_container_sizes_title">Available sizes</h2>
                <div className="ProductDetail_container_sizes_container">
                    <div className="ProductDetail_container_sizes_container_box">
                        <div href="#/" class="ProductDetail_container_sizes_container_box_btn">View Profile</div>
                        <div href="#/" class="ProductDetail_container_sizes_container_box_btn">View Profile</div>
                        <div href="#/" class="ProductDetail_container_sizes_container_box_btn">View Profile</div>
                        <div href="#/" class="ProductDetail_container_sizes_container_box_btn">View Profile</div>
                        <div href="#/" class="ProductDetail_container_sizes_container_box_btn">View Profile</div>
                        <div href="#/" class="ProductDetail_container_sizes_container_box_btn">View Profile</div>
                        <div href="#/" class="ProductDetail_container_sizes_container_box_btn">View Profile</div>
                    </div>
                </div>
            </div>
            <NewGallery />
            <Recommendations />
            
         </div>
        
    )
}