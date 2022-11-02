import React from 'react';
import PropTypes from 'prop-types';
import constantGetterFromASCIIMath from '../../parser';

const ExpressionField = ({expressionChangeFunction, variablesChangeFunction}) => {
    return (
        <div className="pa2 mt4" role="ExpressionField">
            <input
                aria-label = 'Write Expression'
                className = 'pa3 ba b--black bg-lightest-blue' 
                type='search' 
                placeholder='Escriba acá la expresión'
                onChange = {function(event){ expressionChangeFunction(event); variablesChangeFunction(constantGetterFromASCIIMath(event.target.value))}}/>
        </div>
        

    );
};

ExpressionField.propTypes = {
    /**
     * This function is subscribed everytime the user change the value on the input. It is useful to change the current value on the expression display
     */
    expressionChangeFunction: PropTypes.func,
    /**
     * This function is subscribed everytime the user change the value on the input. It is useful to change the current list of variables.
     */
    variablesChangeFunction: PropTypes.func,
  };
  
ExpressionField.defaultProps = {
    expressionChangeFunction: null,
    variablesChangeFunction: null,
};
  

export default ExpressionField; 