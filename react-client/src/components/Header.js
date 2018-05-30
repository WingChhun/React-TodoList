import React from 'react';
import PropTypes from 'prop-types';
//* Import Time component

//TODO: Functional stateless component -Make header markup, pass props to Time

const Header = ({Time}) => {

    return (
        <div className="header">
            <h1 className="header__head">MERN - Todo List
            </h1>
            <h3 className="header__sub">A simple todo list created using the MERN Stack, and random quote generator.</h3>
            <div className="time">
                <h3 className="time__value">{Time}
                </h3>
            </div>
        </div>
    );

}

//* PropType check
Header.propTypes = {

    Time: PropTypes.string.isRequired

}
export default Header;