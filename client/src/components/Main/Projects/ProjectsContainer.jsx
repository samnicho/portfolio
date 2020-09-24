import React, { Component } from 'react';
import Projects from './Projects';

export default class ProjectsContainer extends Component {
    constructor() {
        super();

        this.state = {
            projectIsVisible: false
        };
    }

    setProjectIsVisible = (projectIsVisible) => this.setState({ projectIsVisible });

    render() {
        return (
            <Projects
                {...this.state}
                {...this.props}
                setProjectIsVisible={this.setProjectIsVisible}
            />
        )
    }
}
