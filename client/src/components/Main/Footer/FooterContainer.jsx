import React, { Component } from 'react';
import { filterArr } from '../../../utils/utils';
import axios from 'axios';
import Footer from './Footer';

export default class FooterContainer extends Component {
    constructor() {
        super();

        this.state = {
            contactDetails: [],
            mobile: '',
            gmail: '',
            linkedin: '',
            github: '',
            loading: true
        }
    }

    componentDidMount = () => {
        this.getContactDetails().then(() => {
            this.setState({
                loading: false
            });
        });
    }

    getContactDetails = async () => {
        const contactDetails = await axios.get('/api/connectDetails');
        if (contactDetails.data) {
            this.setState({
                mobile: filterArr(contactDetails.data, 'title', 'mobile')[0].url,
                gmail: filterArr(contactDetails.data, 'title', 'gmail')[0].url,
                linkedin: filterArr(contactDetails.data, 'title', 'linkedin')[0].url,
                github: filterArr(contactDetails.data, 'title', 'github')[0].url
            })
        }
    }

    render() {
        return (
            <Footer {...this.state} />
        )
    }
}