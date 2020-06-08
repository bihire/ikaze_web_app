import React from 'react'
import './exploreLayout.scss'

export default function ExploreLayout({children}) {
    return (
        <div className="ExploreLayout">
            <div className="ExploreLayout_container">
                <div className="ExploreLayout_container_top">
                    <div className="ExploreLayout_container_top_box">
                        <div href="#/" class="ExploreLayout_container_top_box_btn">View Profile</div>
                        <div href="#/" class="ExploreLayout_container_top_box_btn">View Profile</div>
                    </div>
                </div>
                <div className="ExploreLayout_container_bottom">

                </div>
                <div className="ExploreLayout_container_children">
                    {children}
                </div>
            </div>
        </div>
    )
}
