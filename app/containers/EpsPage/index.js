/*
 * EpPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';


import { createStructuredSelector } from 'reselect';

import {
    selectLocationState,
    selectEp,
    selectRecord1, selectRecord1Loading,
    selectRecord2, selectRecord2Loading,
    selectRecord3, selectRecord3Loading,
    selectShop, selectShopLoading 
} from 'containers/App/selectors';

import { 
    loadEp
} from '../App/actions';

import LoadingIndicator from 'components/LoadingIndicator';
import Record from 'components/Record';

import styles from './styles.css';

import Shop from 'containers/Shop';

export class EpsPage extends React.Component {

    componentWillMount() {
        //console.log(this.props.params.name);
        if(!this.props.ep || this.props.ep.name !== this.props.params.name.replace(/\_/gi, ' ')){
          this.props.searchEp();     
        } 
        
        //http://edwardlai3582.com/goo?placeid=ChIJCabEhUJbwokRRogoDkVJzTM
        
    }

    render() {
        let producerName = "";
        let pathNameArray;
        let youtubeSrc = "";
        let placeid = "";
        let r1Artist = "";
        let r1Album = "";
        let r2Artist = "";
        let r2Album = "";
        let r3Artist = "";
        let r3Album = "";
        if(this.props.location.locationBeforeTransitions){
            pathNameArray= this.props.location.locationBeforeTransitions.pathname.split("/");
            producerName=pathNameArray[pathNameArray.length-1].replace(/\_/gi, ' ');            
        }
        
        if(this.props.ep){
            //console.log(this.props.ep);
            youtubeSrc = "https://www.youtube.com/embed/"+this.props.ep.youtubeId;
            placeid = this.props.ep.placeid;
            r1Artist = this.props.ep.records[0].artist;
            r1Album = this.props.ep.records[0].album;
            r2Artist = this.props.ep.records[1].artist;
            r2Album = this.props.ep.records[1].album;
            r3Artist = this.props.ep.records[2].artist;
            r3Album = this.props.ep.records[2].album;
        }
        
        return (
            <article className={styles.epPageWrapper}>
                <Helmet
                    title={producerName}
                    meta={[
                    { name: 'description', content: {producerName} },
                    ]}
                />
                <section className={styles.epSectionWrapper}>
                ddd
                </section>
            </article>
        );
    }
}

EpsPage.propTypes = {
    changeRoute: React.PropTypes.func,
    ep: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
    shop: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
    shopLoading:  React.PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),

    searchEp: () => dispatch(loadEp()),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
    location: selectLocationState(),
    ep: selectEp(),
    record1 : selectRecord1(),
    record2 : selectRecord2(),
    record3 : selectRecord3(),
    shop: selectShop(),
    shopLoading: selectShopLoading(),    
});


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(EpsPage);