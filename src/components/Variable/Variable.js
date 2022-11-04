import React from 'react';
import PropTypes from 'prop-types';

const Variable = ({ name, value, uncertainty, variableModified}) => {
    return(
        <tr>
            <td className="pv3 pr3 bb b--black-20 tc georgia i">
               {name}
            </td>
            <td className="pv3 pr3 bb b--black-20">
                <input id="value" className="input-reset ba b--black-20 pa2 db w-100" 
                type="tel" 
                placeholder={value}
                aria-describedby="value"
                onChange = {(e)=>variableModified([name, e.target.value, uncertainty])}/>
            </td>
            <td className="pv3 pr3 bb b--black-20">
                <input id="uncertainty" className="input-reset ba b--black-20 pa2 db w-100" 
                type="tel" 
                aria-describedby="uncertainty" 
                placeholder={uncertainty}
                onChange = {(e)=>variableModified([name, value, e.target.value])}/>
            </td>
        </tr>
    );
}

Variable.propTypes = {
    /**
     * Name of the variable
     */
     name: PropTypes.string,
    /**
     * Value of the variable
     */
     value: PropTypes.string,
    /**
     * Uncertainty of the variable
     */
    uncertainty: PropTypes.string,
    /**
    * This function is subscribed everytime the user change any value on the variable. 
    */
    variableModified: PropTypes.func,
  };
  
  Variable.defaultProps = {
    name: null,
    value: null,
    uncertainty: null, 
    variableModified: null,
};

export default Variable;