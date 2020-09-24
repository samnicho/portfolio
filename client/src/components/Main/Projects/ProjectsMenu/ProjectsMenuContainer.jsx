import React, { Component } from 'react';
import axios from "axios";
import ProjectsMenu from './ProjectsMenu';

export default class ProjectsMenuContainer extends Component {
    constructor() {
        super();

        this.state = {
            projects: [],
            projectIsVisible: false,
            loading: true
        };
    }

    componentDidMount = () => {
        this.getProjects().then(() => {
            const { projects } = this.state;
            if (projects.length) {
                this.setState({
                    loading: false
                });
            }
        });
    }

    setProjectIsVisible = (projectIsVisible) => this.setState({projectIsVisible});
    
    getProjects = async () => {
        const res = await axios.get("/api/projects");
        if (res.data) {
            this.setState({
                projects: res.data
            });
        }
    }

    render() {
        return (
            <ProjectsMenu
                {...this.state}
                {...this.props}
                setProjectIsVisible={this.setProjectIsVisible}
            />
        )
    }
}
