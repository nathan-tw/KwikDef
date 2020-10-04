import React from 'react'
import PropTypes from "prop-types";

const Report = ({loading}) => {
    return (
        <div>
            {loading ? `loading`: `result`}
            
        </div>
    )
}


Report.propTypes = {
    loading: PropTypes.bool.isRequired,
};
export default Report
