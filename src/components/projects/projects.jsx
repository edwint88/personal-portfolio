import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import './projects.css';


class ProjectsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded1: false,
            expanded2: false,
            expanded3: false,
            expanded4: false,
            expanded5: false,
            expanded6: false,
            expanded7: false,
            expanded8: false,
            expanded9: false,
            expanded10: false,
        };

        this.gambioLink = <a target='_blank' href='https://www.gambio.com/'>Gambio GmbH</a>;
        this.shopwareLink = <a target='_blank' href='https://en.shopware.com/'>shopware AG</a>;
        this.magentoLink = <a target='_blank' href='https://magento.com/'>Magento</a>;
        this.creditreformLink = <a target='_blank' href='https://www.creditreform.de/index.html'>Creditreform</a>;
        this.fhieseLink = <a target='_blank' href='https://www.iese.fraunhofer.de/'>Fraunhofer IESE</a>;
        this.insidersLink = <a target='_blank' href='https://www.insiders-technologies.de/home.html'>Insiders Technologies</a>;
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

    handleExpandChange5 = (expanded5) => {
        this.setState({expanded5: expanded5});
    };

    handleExpandChange6 = (expanded6) => {
        this.setState({expanded6: expanded6});
    };

    handleExpandChange7 = (expanded7) => {
        this.setState({expanded7: expanded7});
    };

    handleExpandChange8 = (expanded8) => {
        this.setState({expanded8: expanded8});
    };

    handleExpandChange9 = (expanded9) => {
        this.setState({expanded9: expanded9});
    };

    handleExpandChange10 = (expanded10) => {
        this.setState({expanded10: expanded10});
    };



    render() {
        return (
            <div className="projects">
                <p className="headline">Projects</p>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Gambio Plugin"
                                    subtitle={this.gambioLink}
                                    actAsExpander={true} showExpandableButton={true}
                                    />
                        <CardText className="projects-card-text" expandable={true}>
                            • Created the architecture of the plugin complying with the PHP OOP principles
                            <br/>
                            • Developed a new REST API for the plugin
                            <br/>
                            • Implemented the testing environment for unit, functional and integration tests
                            <br/>
                            • Created a new strategy for test automation, release and deployment
                            <br/><br/>
                            <a target="_blank" href="https://www.creditreform.de/crefoplugin.html">
                                Creditreform Gambio Plugin
                            </a>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                        <CardHeader title="Shopware Plugin"
                                    subtitle={this.shopwareLink}
                                    actAsExpander={true} showExpandableButton={true}
                                    />
                        <CardText className="projects-card-text" expandable={true}>
                            • Created the architecture of the plugin complying with Shopware standards
                            <br/>
                            • Implemented the testing environment for unit, functional and integration tests
                            <br/>
                            • Extended the strategy for test automation, release and deployment
                            <br/>
                            • Reduced the release time to market of the plugin by automating processes
                            <br/><br/>
                            <a target="_blank" href="https://store.shopware.com/crefo88948166979f/crefoshopwareplugin.html">
                                Creditreform Shopware Plugin
                            </a>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                        <CardHeader title="Magento Plugin"
                                    subtitle={this.magentoLink}
                                    actAsExpander={true} showExpandableButton={true}
                                    />
                        <CardText className="projects-card-text" expandable={true}>
                            • Identified use cases and prioritising them for the development team
                            <br/>
                            • Created the architecture of the plugin complying with Magento standards
                            <br/>
                            • Ongoing project
                            <br/><br/>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                        <CardHeader title="CrefoDirect"
                                    subtitle={this.creditreformLink}
                                    actAsExpander={true} showExpandableButton={true}
                                    />
                        <CardText className="projects-card-text" expandable={true}>
                            • Integrated a new service to generate interlacing graphs based on the relationships of the
                            customers and replace the old applet implementation
                            <br/>
                            • Created REST web services to communicate with the new graph service
                            <br/>
                            • Secured the application, communication and the services with OAuth and Keycloak
                            <br/><br/>
                            <a target="_blank" href="https://www.creditreform.de/leistungen/systeme-beratung/software-loesungen/crefodirect.html">
                                Creditreform CrefoDirect
                            </a>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded5} onExpandChange={this.handleExpandChange5}>
                        <CardHeader title="My Creditreform"
                                    subtitle={this.creditreformLink}
                                    actAsExpander={true} showExpandableButton={true}
                                    />
                        <CardText className="projects-card-text" expandable={true}>
                            • Created microservices
                            <br/>
                            • Ongoing project
                            <br/><br/>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded6} onExpandChange={this.handleExpandChange6}>
                        <CardHeader title="SaveTool (safeTBox)"
                                    subtitle={this.fhieseLink}
                                    actAsExpander={true} showExpandableButton={true}
                        />
                        <CardText className="projects-card-text" expandable={true}>
                            • Extend the functionality of the tool developed in Java, by writing new Eclipse
                            plugins to update the IDE’s user interfaces
                            <br/>
                            • Improve the usability of the tool by creating new features based on the
                            inquiries of our test subjects
                            <br/>
                            • Fixed bugs that were reported by our test users
                            <br/><br/>
                            <a target="_blank" href="https://www.iese.fraunhofer.de/en/competencies/safety_engineering/tools_safety/safetbox.html">
                                Fraunhofere IESE SafeTbox
                            </a>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded7} onExpandChange={this.handleExpandChange7}>
                        <CardHeader title="The Software Ecosystems Smart Farming Lab"
                                    subtitle={this.fhieseLink}
                                    actAsExpander={true} showExpandableButton={true}
                        />
                        <CardText className="projects-card-text" expandable={true}>
                            • Assured the communication using MQTT protocol between various ecosystems
                            (e.g. communication between a tractor and a tablet)
                            <br/>
                            • Developed a monitoring tool of the communications between the systems in the
                            ecosystem
                            <br/>
                            • Developed an android APP for controlling the embedded systems from the
                            ecosystem (e.g. the tractor on a field)
                            <br/><br/>
                            <a target="_blank" href="https://www.iese.fraunhofer.de/en/customers_industries/automotive/referenzprojekt_innozentrum_asm_smart-farming.html">
                                Fraunhofere IESE Smart Framing
                            </a>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded8} onExpandChange={this.handleExpandChange8}>
                        <CardHeader title="Ind2uce application"
                                    subtitle={this.fhieseLink}
                                    actAsExpander={true} showExpandableButton={true}
                        />
                        <CardText className="projects-card-text" expandable={true}>
                            • Researched new ways to view the transfer of documents between two entities and
                            behind an encrypted data, based on metadata
                            <br/>
                            • Developed a monitoring tool of the history of file sharing and permissions
                            granted
                            <br/><br/>
                            <a target="_blank" href="https://www.iese.fraunhofer.de/en/competencies/security/ind2uce-framework.html">
                                Fraunhofere IESE Ind2uce Framework
                            </a>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded9} onExpandChange={this.handleExpandChange9}>
                        <CardHeader title="IOS application for Insiders"
                                    subtitle={this.insidersLink}
                                    actAsExpander={true} showExpandableButton={true}
                        />
                        <CardText className="projects-card-text" expandable={true}>
                            • Created an IOS application that could scan the medical invoices and image process them
                            <br/>
                            • Created the communication with the datacenter server for analyzing the invoices
                            <br/>
                            • Assured that the architecture of the app is complying with the IOS framework
                            <br/><br/>
                            <a target="_blank" href="https://www.insiders-technologies.de/home/products/mobile/smart-capture.html">
                                Smart Capture
                            </a>
                        </CardText>
                    </Card>
                </div>
                <div className="projects-entry">
                    <Card xpanded={this.state.expanded10} onExpandChange={this.handleExpandChange10}>
                        <CardHeader title="Private Project: Wazzup"
                                    subtitle="Amazon Alexa skill"
                                    actAsExpander={true} showExpandableButton={true}
                        />
                        <CardText className="projects-card-text" expandable={true}>
                            • Created an Alexa Skill
                            <br/><br/>
                            <a target="_blank" href="https://www.amazon.com/zartu-Wazzup/dp/B07894LPSQ">
                                Wazzup (Alexa Skill)
                            </a>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

export default ProjectsComponent;
