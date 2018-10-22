import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded1: false,
            expanded2: false,
            expanded3: false,
            expanded4: false
        };
    }

    async componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleExpandChange = (expanded1) => {
        this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
        this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
        this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
        this.setState({expanded4: expanded4});
    };

    handleExpand = () => {
        this.setState({expanded1: true});
    };

    handleExpand2 = () => {
        this.setState({expanded2: true});
    };

    handleExpand3 = () => {
        this.setState({expanded3: true});
    };

    handleExpand4 = () => {
        this.setState({expanded4: true});
    };

    handleReduce = () => {
        this.setState({expanded1: false});
    };

    handleReduce2 = () => {
        this.setState({expanded2: false});
    };

    handleReduce3 = () => {
        this.setState({expanded3: false});
    };

    handleReduce4 = () => {
        this.setState({expanded4: false});
    };

    render() {
        return (
            <div className="timeline">
                <p className="headline">Working experience</p>
                <div className="timeline-entry">
                    <Card>
                        <CardHeader title="Full Stack Developer" subtitle="Creditreform VVC"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            July 2015 - present<br/>
                            Developing Microservices, Web Shops Plugins and Enterprise
                            Applications.
                            <br/><br/>
                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Scrum</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Confluence</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Jira</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Java</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Junit</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Concordion/Selenium</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>JSP/JSF Servlets</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>REST API</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Weblogic</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Keycloak</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>OAuth</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Docker</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Vagrant</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Jenkins</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>SonarQube</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Maven</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>GitFlow</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Webshops Plugins</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>PHP</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>PHPUnit</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Composer</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Doctrine2</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Symfony2</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Smarty</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Karma</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Jasmine</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Gulp</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Grunt</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>ExtJs</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Angular</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Research Assistant"
                                    subtitle="Fraunhofer Institute for Experimental Software Engineering (IESE)"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            September 2012 - October 2014<br/>
                            <br/>
                            • Assistant in research projects and industry collaborations
                            <br/>
                            • Member of the Developer Team
                            <br/>
                            • Developed tools used internally by Fraunhofer IESE
                            <br/><br/>
                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Architecture</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>IOT</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Java</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>JavaFX</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Maven</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Xtend</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Mercurial</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Apache MQTT</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Android</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="timeline-entry">
                    <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                        <CardHeader title="MSc. Student - Software Engineer"
                                    subtitle="Technische Universität Kaiserslautern"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            October 2011 - October 2014<br/>
                            Agile methodologies, process automation and management, software architecture, web and
                            software development.
                            <br/><br/>
                            Thesis: Live Monitoring of Software Ecosystems.

                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Agile Frameworks</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Architecture Frameworks</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Scrum</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Extreme Programming (XP)</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Continuous Integration (CI)</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Agile practices</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Architecture Visualisation</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Architecture Anti-/Patterns</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="timeline-entry">
                    <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                        <CardHeader title="BSc. Student - Informatics Specialist"
                                    subtitle="University of Timişoara, Engineering Faculty Hunedoara - Informatics"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            October 2010 - October 2011<br/>
                            Artificial intelligence, software architecture, web and software development.
                            <br/><br/>
                            Thesis: Automated teller machine and bank management.

                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Software Development</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Software Architecture Frameworks</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Software Architecture Patterns</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Machine Learning</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
                <div className="timeline-entry">
                    <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                        <CardHeader title="BSc. Student - Economical IT Engineer"
                                    subtitle="Bucharest Academy of Economic Studies - Faculty of Economic Cybernetics"
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            October 2007 - October 2010<br/>
                            Basis of software development and project management.
                            <br/><br/>
                            Thesis: E-Commerce webshop for hotel reservations.

                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Basis of Programming</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Basis of Software Development</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Basis of Web Development</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Economic Informational Systems</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Business Processes</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Project Management</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Marketing</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
