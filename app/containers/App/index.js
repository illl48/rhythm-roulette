/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Img from 'components/Img';
import Footer from 'components/Footer';
import Banner from './banner-metal.jpg';
import A from 'components/A';

import styles from './styles.css';

function App(props) {
  return (
    <div className={styles.wrapper}>
      <Helmet
        titleTemplate="%s - Rhythm Roulette"
        defaultTitle="Rhythm Roulette"
        meta={[
          { name: 'description', content: 'A Rhythm Roulette information site' },
        ]}
      />

      {props.children}
      <Footer />
    </div>
  );
}

/*
      <A className={styles.logoWrapper} href="https://twitter.com/mxstbr">
        <Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />
      </A>
*/

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;