import React, { Component } from 'react';
import Main from './Main';

export default class MainContainer extends Component {
    constructor() {
        super();

        this.state = {
            projectIsVisible: false,
            menuIsVisible: true
        };
    }

    componentDidMount = () => {
        this.setMenuIsVisible();
    }

    setProjectIsVisible = (projectIsVisible) => {
        const menuIsVisible = this.state.menuIsVisible;
        this.setState({ projectIsVisible }, () => {
            if (projectIsVisible === false && window.location.hash === '#about') {
                const about = document.getElementById('about');
                const { top, height } = about.getBoundingClientRect();
                setTimeout(() => {
                    window.scroll({
                        top: top + height,
                        behavior: "smooth"
                    })
                }, 400)
            } else if (projectIsVisible && menuIsVisible) {
                this.setState({ menuIsVisible: false })
            }
        })
    };

    setMenuIsVisible = (menuIsVisible) => {
        window.innerWidth < 1024 && this.setState({ menuIsVisible });
    }

    render() {
        return (
            <Main
                {...this.state}
                setProjectIsVisible={this.setProjectIsVisible}
                setMenuIsVisible={this.setMenuIsVisible}
            />
        )
    }
}