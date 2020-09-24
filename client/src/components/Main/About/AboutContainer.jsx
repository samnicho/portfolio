import React, { Component } from 'react';
import axios from 'axios';
import About from './About';

export default class AboutContainer extends Component {
    constructor() {
        super()

        this.state = {
            loading: true,
            bio: []
        }
    }

    componentDidMount = () => {
        this.getContent();
    }

    getContent = async () => {
        const { data: { 0: { bodyContent } } } = await axios.get(`/api/pageContent/bio`);

        if (bodyContent) {
            this.setState({
                loading: false,
                bio: bodyContent
            });
        }
    }

    render() {
        return (
            <About {...this.state} {...this.props} setProjectIsVisible={this.props.setProjectIsVisible} projectIsVisible={this.props.projectIsVisible} />
        )
    }
}