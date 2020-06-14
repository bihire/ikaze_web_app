import React from 'react'
import './inputWithButton.scss'

export default function InputWithButton() {
    return (
        <div className="InputWithButton_container">
            <input id="searchBar" className="InputWithButton_container_searchbar" type="text" placeholder="shakishiriza hano..." />
            <div className="hInputWithButton_container_btn_search">
                <i className="fa fa-search"></i>
            </div>
        </div>
    )
}
