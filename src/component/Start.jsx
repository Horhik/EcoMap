import React from 'react';
import {connect} from 'react-redux'
import Logo from "./Logo";
import {Switch, BrowserRouter, Route, Link} from "react-router-dom";
import YMap from "./maps/map";

const StarterPage = (props) => {
    return(
        <section className={'starter-page'}>
            <Logo class={'starter-page__logo'} status={"main"}/>
           <h1 className="h1 starter-page__h1">
               Узнайте больше об экологии своего района

           </h1>
            <BrowserRouter>
            <Link type={'button'} className={'button  starter-page__button'} to={'/districts'}>
                Начать
            </Link>
            </BrowserRouter>
        </section>
    )
}

export default connect()(StarterPage)