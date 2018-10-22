import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './programming.css';

class ProgrammingComponent extends Component {

    render() {
        const style = {
            width: '100%',
            display: 'inline-block',
            background: '#004952'
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
                            <ul>
                                <li>&lt;<span className="html-1">html</span>&gt;</li>
                                <li>
                                    <ul className="no-top-padding">
                                        <li>
                                            &lt;<span className="html-1">head</span>&gt;
                                            &lt;/<span className="html-1">head</span>&gt;
                                        </li>
                                        <li>&lt;<span className="html-1">body</span>&gt;</li>
                                        <li>
                                            <ul className="no-top-padding">
                                                <li>&lt;<span className="html-1">ul</span>&gt;</li>
                                                <ul className="no-top-padding">
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">Java, Servlets JSP/JSF, Spring Framework</span>
                                                        &lt;/<span className="html-1">li</span>&gt;</li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">PHP, Symfony2, Doctrine2, Monolog, Smarty</span>
                                                        &lt;/<span className="html-1">li</span>&gt;</li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">Javascript, Angular 2, ExtJs, Node.js, JQuery</span>
                                                        &lt;/<span className="html-1">li</span>&gt;
                                                    </li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">GitFlow, Mercurial</span>
                                                        &lt;/<span className="html-1">li</span>&gt;
                                                    </li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">Maven, Groovy, Composer</span>
                                                        &lt;/<span className="html-1">li</span>&gt;
                                                    </li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">Keycloak, OAuth</span>
                                                        &lt;/<span className="html-1">li</span>&gt;
                                                    </li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">Docker, Vagrant, Hyper-V, VM</span>
                                                        &lt;/<span className="html-1">li</span>&gt;
                                                    </li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">Linux, Windows, OSX</span>
                                                        &lt;/<span className="html-1">li</span>&gt;
                                                    </li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">HTML5, CSS, LESS, SASS</span>
                                                        &lt;/<span className="html-1">li</span>&gt;
                                                    </li>
                                                    <li>
                                                        &lt;<span className="html-1">li</span>&gt;
                                                        <span className="html-2">AWS technologies, Alexa SDK, DialogFlow, Google Actions</span>
                                                        &lt;/<span className="html-1">li</span>&gt;
                                                    </li>
                                                </ul>
                                                <li>&lt;/<span className="html-1">ul</span>&gt;</li>
                                            </ul>
                                        </li>
                                        <li>&lt;/<span className="html-1">body</span>&gt;</li>
                                    </ul>
                                </li>
                                <li>&lt;/<span className="html-1">html</span>&gt;</li>
                            </ul>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default ProgrammingComponent;
