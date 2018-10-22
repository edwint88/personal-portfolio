import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionBookmark from 'material-ui/svg-icons/action/bookmark';
import ActionBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import './design.css';
import FlatButton from "material-ui/FlatButton";


class DesignComponent extends Component {

    render() {
        return (
            <div className="design">
                <p className="headline">Technologies and more</p>
                <p className="text-justify">
                    From an young age I was lured to play with technology, research what I've not understand
                    and create new solutions.
                    <br/>
                    I like to test and play with different tools ( like Photoshop, Audacity, Sktich and so on)
                    in order to create beautiful content or just to help me to achieve my goals in the projects
                    by spending less time and money.
                    <br/>
                    All this various knowledge helps me to analyze my current projects from different angles and roles.
                    It helps me to put myself in the shoes of my co-workers and understand their needs.
                    <br/>
                    I am always interested into books about software engineering, process optimization, agile
                    frameworks,
                    software development stories and experiences.
                </p>

                <p className="text-justify"> Here are some interesting Books to start with: </p>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<ActionBookmark/>}
                        uncheckedIcon={<ActionBookmarkBorder/>}
                        iconStyle={{"fill": "#4f009d"}}
                        label="Phoenix Project: A Novel about It, Devops, and Helping Your Business Win"
                    />
                    <FlatButton label="Buy it on Amazon" href="https://www.amazon.de/Phoenix-Project-Devops-Helping-Business/dp/1942788290?SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duc03-21&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1942788290" target="_blank"/>
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<ActionBookmark/>}
                        uncheckedIcon={<ActionBookmarkBorder/>}
                        iconStyle={{"fill": "#4f009d"}}
                        label="Information Visualization: Perception for Design"
                    />
                    <FlatButton label="Buy it on Amazon" href="https://www.amazon.de/dp/B0083JCI3W/?coliid=IMFNECQP2QJM2&colid=2O10O30YRVQ4G&psc=0&ref_=lv_ov_lig_dp_it" target="_blank"/>
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<ActionBookmark/>}
                        uncheckedIcon={<ActionBookmarkBorder/>}
                        iconStyle={{"fill": "#4f009d"}}
                        label="Clean Code: A Handbook of Agile Software Craftsmanship"
                    />
                    <FlatButton label="Buy it on Amazon" href="https://www.amazon.de/Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1540164211&sr=1-1&keywords=clean+code" target="_blank"/>
                </div>

            </div>
        );
    }
}

export default DesignComponent;
