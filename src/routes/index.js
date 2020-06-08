import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Error from '../components/error';
import Main from '../pages/Main';
import ProductDetail from '../pages/ProductDetail';
import Explore from '../pages/Explore';
import SingleShop from '../pages/SingleShop';
import BusMap from '../pages/Maps';

export default function index() {
  return (
    <Switch>
      {/* IsPrivate path="/" exact component={MAin} /> */}
      <Route path="/" exact component={Main} />   
      <Route path="/nike" exact component={ProductDetail} /> 
      <Route path="/explore" exact component={Explore} /> 
      <Route path="/shop/id" exact component={SingleShop} /> 
      <Route path="/map" exact component={BusMap} /> 
      <Route path="*" component={Error} />
    </Switch>
  );
}
