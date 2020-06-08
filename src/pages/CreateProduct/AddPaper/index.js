import React from 'react'
import ImageUploader from '../../../components/ImageUploader'
import SingleImageUploader from '../../../components/SingleImageUploader'

import './addPaper.scss'

export default function AddPaper() {
    return (
        <div className="AddPaper">
            <div className="AddPaper_container">
                <div className="AddPaper_container_paper">
                    <div className="AddPaper_container_paper_top">
                        <div className="AddPaper_container_paper_top_title">
                            Product-cover image or video
                        </div>
                        
                    </div>
                    <div className="AddPaper_container_paper_bottom">
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
                        <div>
                            add supporting images
                </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
