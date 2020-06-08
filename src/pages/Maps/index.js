import React from 'react'
import Header from '../../components/Header'
import MapComponent from '../../components/MapComponent'
import MainLayout from '../../components/MainLayout'
import MapOptions from './MapOptions'
import './map.scss'

const Maps = () => {
    return (
        <div className="Maps">
            <Header />
            <MainLayout rightData={<MapComponent />} leftData={<MapOptions />} />
        </div>
    )
}

export default Maps