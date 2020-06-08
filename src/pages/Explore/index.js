import React from 'react'
import Header from '../../components/Header'
import ExploreLayout from '../../components/ExploreLayout'
import ExploreShops from './ExploreShops'
import ExploreProducts from './ExploreProducts'
import './explore.scss'

export default function Explore() {
    return (
        <div className="">
            <Header />
            <ExploreLayout>
                <div className="Explore">
                    <div className="Explore_container">
                        {/* <ExploreProducts /> */}
                        <ExploreShops />
                    </div>
                </div>
            </ExploreLayout>
        </div>
        
    )
}
