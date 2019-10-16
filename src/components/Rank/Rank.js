import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <div className="pa0">
            <div className="center black-70 f3 pa4">
                {`${name}, your current rank is...`}
            </div>
            <div className="center black-70 f1 ">
                {`#${entries}`}
            </div>

        </div>
    );
};

export default Rank;