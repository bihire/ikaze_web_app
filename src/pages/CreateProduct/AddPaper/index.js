import React from 'react'
import ImageUploader from '../../../components/ImageUploader'

import './addPaper.scss'

export default function AddPaper({title, children}) {
    return (
        <div className="AddPaper">
            <div className="AddPaper_container">
                <div className="AddPaper_container_paper">
                    <div className="AddPaper_container_paper_top">
                        <div className="AddPaper_container_paper_top_title">
                            {title}
                        </div>
                    </div>
                    <div className="AddPaper_container_paper_bottom">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
