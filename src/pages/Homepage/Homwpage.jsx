import React from 'react';
import Feedback from '../../components/Feedback/Feedback';
import Banner from '../../components/Banner/Banner';
import Choice from '../../components/Choice/Choice';
import CustomerSupport from '../../components/CustomerSupport/CustomerSupport';
import Header from '../../components/Header/Header';
import Promote from '../../components/Promote/Promote';
import Services from '../../components/Services/Services';
import InsideNews from '../../components/InsideNews/InsideNews';
import Contact from '../../components/Contact/Contact';
import ReachUs from '../../components/ReachUs/ReachUs';
import Footer from '../../components/Footer/Footer';

const Homwpage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <CustomerSupport></CustomerSupport>
            <Promote></Promote>
            <Choice></Choice>
            <Feedback></Feedback>
            <InsideNews></InsideNews>
            <Contact></Contact>
            <ReachUs></ReachUs>
            <Footer></Footer>
        </div>
    );
};

export default Homwpage;