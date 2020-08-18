import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './programming.css';
import NavigationChevronRight from "material-ui/svg-icons/navigation/chevron-right";

class ProgrammingComponent extends Component {

    render() {
        const style = {
            width: '100%',
            display: 'inline-block',
            background: '#000000'
        };
        return (
            <div className="programming">
              <p className="headline"> Programming skills</p>
                <div className="programming-console">
                    <Paper zDepth={3} style={style}>
                        <div className="console-header">
                            <div className="console-buttons">
                                <div className="console-button btn-1"></div>
                                <div className="console-button btn-2"></div>
                                <div className="console-button btn-3"></div>
                            </div>
                        </div>
                        <div className="console-content">
                            <span className="console-user">edwin@programming</span><span className="console-delimiter">~> </span><span className="console-result">ls Skills</span>
                            <ul className="no-top-padding">
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 1TB 1 Jul 2013 <span className="console-out-skill"> Java, Servlets JSP/JSF, Spring Framework</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 2TB 13 Oct 2007 <span className="console-out-skill"> PHP, Symfony2, Doctrine2, Monolog, Smarty</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 566GB 12 Sep 2010 <span className="console-out-skill"> Javascript, Angular 2, ExtJs, Node.js, JQuery</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 650GB 21 Jul 2014 <span className="console-out-skill"> GitFlow, Mercurial</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 845GB 11 Dec 2011 <span className="console-out-skill"> Maven, Groovy, Composer</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 520GB 24 Jun 2015 <span className="console-out-skill"> Keycloak, OAuth</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 500GB 29 Feb 2012 <span className="console-out-skill"> Docker, Vagrant, Hyper-V, VM</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 1TB 10 Aug 1995<span className="console-out-skill"> Linux, Windows, OSX</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 1TB 17 Mar 1997 <span className="console-out-skill"> HTML5, CSS, LESS, SASS</span></span>
                                </li>
                                <li>
                                    <span className="console-output">-rwxrwx--- 1 edwin proficiency 282GB 19 Jan 2017 <span className="console-out-skill"> AWS technologies, Alexa SDK, DialogFlow, Google Actions</span></span>
                                </li>
                            </ul>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default ProgrammingComponent;
