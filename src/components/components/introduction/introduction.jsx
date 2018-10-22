import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
              <p className="introduction-text">
                  Interested in agile frameworks, voice technology, machine learning, security topics and new technologies.
                  Attending Meetups and Hackatons in the area of Düsseldorf (NRW) on topics like DevOps, Agile Frameworks, Web innovations, IOT technologies and any other Software Engineering topics.
                  The other part of my time I read books, travel, play fetch with my dog and play video games with my wife, currently living in Düsseldorf, Germany.
              </p>
          </div>
        );
    }
}

export default IntroductionComponent;
