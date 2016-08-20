import React, { Component } from 'react';

import Header from './Header';
import Rebels from './Rebels';
import Footer from './Footer';

export default class App extends Component {

    render() {
        return (
            <div className="app container">
                <Header />
                <Rebels />
                <Footer />
            </div>
        );
    }
}

