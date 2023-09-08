import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {

const emptyMessage=(
    <p>there are no movies yet.</p>
)
const MoviesList =(

    <div>
        Moives List
    </div>
)
    return ( 
        <div>
            {movies.length === 0 ? emptyMessage : MoviesList}
        </div>
     );
}
MoviesList.prototype = {
movies:PropTypes.array.isRequired

}

 
export default MoviesList;