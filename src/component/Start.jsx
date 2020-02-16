import React from 'react';
import {connect} from 'react-redux'
import Logo from "./Logo";
import { Link} from "react-router-dom";

const StarterPage = (props) => {
    return(
            <section className={'starter-page'}>
            <Logo class={'starter-page__logo'} status={"main"}/>
           <h1 className="h1 starter-page__h1">
               Узнайте больше об экологии своего района

           </h1>
            <Link type={'button'} className={'button  starter-page__button'} to={'/districts'}>
                Начать
            </Link>
        </section>
    )
}

export default connect()(StarterPage)