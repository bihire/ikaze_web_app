import React, { Component } from 'react'
import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'
import HomeCard from '../../components/HomeCard'
import './main.scss'

export default class Main extends Component {
    render() {
        return (
            <div className="MainEntry">
                <Header />
                <MainLayout  rightData={<HomeCard />}/>
            </div>
        )
    }
}
