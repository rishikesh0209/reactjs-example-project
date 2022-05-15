import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title,onAdd,showAdd}) => {
    // console.log("showAddTask",showAdd)
    return (
        <header className="header">
            <h1 >{title} </h1>
            <Button text= {!showAdd ? "Add" :"Hide"} color={!showAdd ? "Green" :"Red"}  onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker',
    title2:'Task Tracker 2'
}
Header.propTypes={
    title: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired
}

export default Header
