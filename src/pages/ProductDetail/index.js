import React from 'react'
import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'
import ProductDetail from './ProductDetail'

export default function index() {
    return (
        <div className="MainEntry">
            <Header />
            <MainLayout rightData={<ProductDetail />} />
        </div>
    )
}
