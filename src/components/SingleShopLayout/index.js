import React from 'react'
import { KeyboardBackspace } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import './singleShopLayout.scss'

export default function ExploreLayout({ children }) {
    const styles = {
        button: {
            width: 34, height: 34,
            padding: 0
        },
        icon: {
            fontSize: 26,
            color: '#000'
        },
        tooltip: {
            marginLeft: 7
        }
    };
    return (
        <div className="SingleShopLayout">
            <div className="SingleShopLayout_container">
                <div className="SingleShopLayout_container_children">
                    {children}
                </div>
            </div>
        </div>
    )
}
