import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
                Interested in software engineering, machine learning, voice technology, security topics and new technologies. <br/>
                I like to attend Meetups and Hackatons on topics like DevOps, Agile Frameworks, Web innovations, IOT technologies. <br/>
                In the remaining part of my time I read books, travel, play fetch with my dog and play video games with my wife.
                <br/><br/>
                Currently I am living in Düsseldorf, Germany.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
