/*******************************************************************************
 * About
 *
 *
 * page describing the author in a card grid layout
*******************************************************************************/


import React, { Component } from 'react';
import Layout from '../components/Layout';
import AboutCard from '../components/CustomCards/AboutCard';
import SocialCard from '../components/CustomCards/SocialCard';
import ImageCard from '../components/CustomCards/ImageCard';
import ModalCard from '../components/CustomCards/ModalCard';
import ResumeCard from '../components/CustomCards/ResumeCard';
import PhoneCard from '../components/CustomCards/PhoneCard';
import EmailCard from '../components/CustomCards/EmailCard';
import { Helmet } from 'react-helmet/es/Helmet';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1 | props.activeKey,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log('selected ' + key);
    this.setState({ key });
  }
  render() {
    //each card will pass in its data as arguments to the properties set up in the components themselves
    return (
      <Layout>
        <Helmet>
          <title>About --Thomas Leon Highbaugh</title>
        </Helmet>

        <div id="about">
          <div className="row">
            <AboutCard
              id="1"
              cardTitle="[dev]"
              cardSubtitle="the developer behind this site"
              cardText2="My name is Thomas Leon Highbaugh, a self taught web developer and devops zealot from beautiful Hayward, California!"
            />
            <ResumeCard id="3" />
            <AboutCard
              id="2"
              cardTitle="[site]"
              cardSubtitle="showcase React Portfolio Site"
              cardText="Built With"
              cardText2=" YEOMAN + REACT + GATSBY "
              cardText3=" SCSS + ESLINT + NETLIFY "
            />
          </div>
          <div className="row">
            <EmailCard />
            <ImageCard cardImage="https://raw.githubusercontent.com/Thomashighbaugh/galleries-images/master/images/061.jpg" />

            <AboutCard
              cardTitle="[art]"
              cardSubtitle="about the graphics used on this site"
              cardText="All the artwork featured are original pieces by me, except the background patterns. Thanks Hero Patterns"
              cardText4="If you like them, check out my Instagram for more!"
            />
          </div>
          <div className="row">
            <PhoneCard />
            <ModalCard />
            <SocialCard />
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
