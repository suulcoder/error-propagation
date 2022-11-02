import React from 'react';
import getResult from '../../propagation'
import PropTypes from 'prop-types';

const Result = ({ expressionString, variablesList, prevResultDic, calculateResultFunction}) => {
    return(
        <div className="pv2 ph3 flex flex-column justify-start items-center w-100">
            <input 
                onClick={(e) => calculateResultFunction(getResult(expressionString,variablesList,prevResultDic))} 
                className="f6 b br3 b--black ph3 pv2 input-reset ba bg-transparent grow pointer dib" 
                type="submit" 
                value="Calcular Resultado"/>
            <table className="pa3 f6 w-100 mw8 center" cellSpacing="0">
                <tbody className="lh-copy">   
                    <tr>
                        <td className="pv3 pr3 bb bt b--black-20 tc">
                             {'Resultado: ' + prevResultDic.total}
                        </td>
                    </tr>
                    <tr>
                        <td className="pv3 pr3 bb b--black-20 tc">
                            
                            {'Propagación de error: ' + prevResultDic.uncertainty} 
                        </td>
                    </tr>
                    <tr>
                        <td className="pv3 pr3 bb b--black-20 tc">
                            
                            {'RSME: ' + prevResultDic.rmse} 
                        </td>
                    </tr>
                </tbody>
            </table>
            
            
        </div>
    );
}

Result.propTypes = {
    /**
    * Expression submitted by the user
    */
    expressionString: PropTypes.string,
    /**
    * List of tuples of the following structure: (<Variable Name>, <Variable Value>, <Variable Uncertainty>) 
    */
    variablesList: PropTypes.object,
    /**
    * Dictionary of the following structure: {<Result>, <Uncertainty>, <RMSE>}
    */
    prevResultDic: PropTypes.object,
    /**
    * This function is subscribed everytime the user change any value on the variable. 
    */
    calculateResultFunction: PropTypes.func,
  };
  
Result.defaultProps = {
    expressionString: null,
    variablesList: null,
    prevResultDic: null,
    calculateResultFunction: null,
};
  

export default Result;