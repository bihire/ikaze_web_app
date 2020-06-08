import React from 'react'
import './mainLayout.scss'

export default function MainLayout({
    rightData,
    leftData
}) {
    return (
        <div className="MainLayout">
            <div className="MainLayout_container">
                <div className="MainLayout_container_left">
                    {rightData}
                </div>
                <div className="MainLayout_container_right">
                    {leftData}
                </div>
            </div>
            
        </div>
    )
}
