import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
 TODO: class Quote =>
  * : Make request to /api/quote
  * : Update this.state.quote using passed in function
  * : Check Proptypes to be given a function
*/
class Quote extends Component
{

    constructor(props)
    {
        super(props);
        this._updateQuote = this.props._updateQuote;
        this.quote2 = "Did not connect to API!";
        this._retrievedQuote = false;
    }

    //TODO: make request to API
    componentDidMount()
    {

        /*
        * Retrieve quote from API,
        *  Send as json()
        * return quote[0]
        * quote[0] = object, update quote with it
        */

        fetch("/api/quote")
            .then(quote => quote.json())
            .then(quote => quote[0])
            .then(quote => {
                //* update quote
                this._updateQuote(quote);
                return true;
            })
            .then(truthy => this._retrievedQuote = truthy)
            .catch(e => console.log(e));

    }

    /*
    TODO: parseQuote() -
    TODO: PURPOSE -> Remove Unwanted symbols and html tags from quote
    */
    _parseQuote = (content) => {

        content = content.replace(/[^a-zA-Z0-9-. ]/g, '');
        //* remove the p's by splitting content into an array, pop reverse pop and join
        let temp = content.split('');
        temp.pop();
        temp = temp.reverse();
        temp.pop();
        content = temp
            .reverse()
            .join('');

        return content;
    }

    //TODO: RENDER(), pull quote from props, display content
    render()
    {
        const {quote, content} = this.props;
        return (

            <div className="quote">

                <p className="quote__text">
                    <i className="fa  fa-quote-left"/>
                    <em>
                        {this._retrievedQuote && this._parseQuote(content)}
                    </em>
                    <i className="fa  fa-quote-right"/>
                </p>
            </div>

        );
    }

}

Quote.propTypes = {

    quote: PropTypes.object.isRequired,
    content: PropTypes.string

};

export default Quote;
