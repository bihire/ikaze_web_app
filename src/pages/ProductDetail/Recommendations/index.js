import React from 'react'
import './recommadations.scss'
import { AspectRatio } from '@material-ui/icons'

export default function Recommendations() {
    return (
        <div className="Recommendations">
            <div className="Recommendations_container">
                <div className="Recommendations_container_title">
                    <h2>Recommended</h2>
                </div>
                <div className="Recommendations_container_recomendation">
                    <div className="Recommendations_container_recomendation_box">
                        <div class="Recommendations_container_recomendation_box_product">
                            <div class="Recommendations_container_recomendation_box_product_inside">
                                <div class="Recommendations_container_recomendation_box_product_imgbox">
                                    <div  class="Recommendations_container_recomendation_box_product_imgbox_aspect">
                                        <div style={{aspectRatio: '4/5'}} class="Recommendations_container_recomendation_box_product_imgbox_aspect_box">

                                            {/* <img src="https://images.sportsdirect.com/images/products/62310640_l.jpg" /> */}
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* <div class="Recommendations_container_recomendation_box_details">
                                    <div class="Recommendations_container_recomendation_box_details_price">$55.99</div>
                                    <h2>Brand Name<br /><span>Mens Designer T-shirt</span></h2>
                                    

                                </div> */}
                            </div>
                            
                        </div>
                        <div class="Recommendations_container_recomendation_box_product">
                            <div class="Recommendations_container_recomendation_box_product_inside">
                                <div class="Recommendations_container_recomendation_box_product_imgbox">
                                    <div class="Recommendations_container_recomendation_box_product_imgbox_aspect">
                                        <div style={{ aspectRatio: '4/5' }} class="Recommendations_container_recomendation_box_product_imgbox_aspect_box">

                                            {/* <img src="https://images.sportsdirect.com/images/products/62310640_l.jpg" /> */}
                                        </div>

                                    </div>
                                </div>
                                {/* <div class="Recommendations_container_recomendation_box_details">
                                    <div class="Recommendations_container_recomendation_box_details_price">$55.99</div>
                                    <h2>Brand Name<br /><span>Mens Designer T-shirt</span></h2>
                                    

                                </div> */}
                            </div>

                        </div>
                        <div class="Recommendations_container_recomendation_box_product">
                            <div class="Recommendations_container_recomendation_box_product_inside">
                                <div class="Recommendations_container_recomendation_box_product_imgbox">
                                    <div class="Recommendations_container_recomendation_box_product_imgbox_aspect">
                                        <div style={{ aspectRatio: '4/5' }} class="Recommendations_container_recomendation_box_product_imgbox_aspect_box">

                                            {/* <img src="https://images.sportsdirect.com/images/products/62310640_l.jpg" /> */}
                                        </div>

                                    </div>
                                </div>
                                {/* <div class="Recommendations_container_recomendation_box_details">
                                    <div class="Recommendations_container_recomendation_box_details_price">$55.99</div>
                                    <h2>Brand Name<br /><span>Mens Designer T-shirt</span></h2>
                                    

                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
