import React from 'react'
import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'
import AddProductLayout from './AddProductLayout'
import './createProduct.scss'

export default function CreateProduct() {
    return (
        <div className="MainEntry">
            <Header />
            <MainLayout rightData={<AddProductLayout />} />
        </div>
    )
}
