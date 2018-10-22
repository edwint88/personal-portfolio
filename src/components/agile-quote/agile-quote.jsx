import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                Improving daily work is even more important than doing daily work.
              </span>
              <span className="quote-author">- Kim, Gene. The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win (Kindle Locations 3404-3405). IT Revolution Press. Kindle Edition. </span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
