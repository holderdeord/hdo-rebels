import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Rebels extends Component {
    state = { data: null }

    componentDidMount() {
        fetch('//data.holderdeord.no/data/rebels.json')
            .then(res => res.ok ? res.json() : Promise.reject(new Error(`req failed ${req.url} - ${req.status} ${req.statusText}`)))
            .then(data => this.setState({data}))
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

