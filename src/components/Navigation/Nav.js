import React from 'react';

const Navigation = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='signOut f4 dim link pa2 ma3 shadow-4 br3 white-80 pointer' >Sign Out</p>
        </nav>
    );
};

export default Navigation;