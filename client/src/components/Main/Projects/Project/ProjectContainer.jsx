import React, { Component } from 'react';
import axios from "axios";
import Project from './Project';

export default class ProjectContainer extends Component {
    constructor() {
        super();

        this.state = {
            projectDetails: {},
            page: 1,
            pageTransition: false,
            loading: true
        };
    }

    componentDidMount = () => {
        const { match: { params: { project } } } = this.props;
        this.getProject(project).then((res) => {
            console.log(res);
            
            if (res.data) {
                this.setState({
                    projectDetails: res.data,
                    loading: false
                });
            }
        });
    }

    componentDidUpdate = (prevProps) => {
        const { match: { params: { project } } } = this.props;
        if (project !== prevProps.match.params.project) {
            this.setState({
                loading: true,
                page: 1
            }, () => {
                this.getProject(project).then((res) => {
                    if (res.data) {
                        this.setState({
                            projectDetails: res.data,
                        }, () => {
                            setTimeout(() => {
                                this.setState({
                                    loading: false
                                })
                            }, 1050)
                        })
                    }
                });
            })
        }
    }

    getProject = async (projectKey) => {
        const project = await axios.get(`/api/projects/one/${projectKey}`);
        this.props.setProjectIsVisible(true);
        return project;
    };

    setPage = (newPage) => {
        this.setState({
            pageTransition: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    page: newPage,
                    pageTransition: false
                })
            }, 1050);
        })
    }

    // setNextBtnPosition = () => {
    //     const btn = document.getElementById("project_next");
    //     const visibleHeight = window.innerHeight;
    //     btn.style.top = `${visibleHeight*0.8}px`;
    // }

    // onClickNextBtn = () => {
    //     for (const el of document.getElementById('projectWrapper').children) {
    //         console.log(el);
    //         el.style.transform = `translateY(${-window.innerHeight}px)`;
    //     }
    // }

    render() {
        return (
            <Project {...this.state} setPage={this.setPage} />
        )
    }
}
