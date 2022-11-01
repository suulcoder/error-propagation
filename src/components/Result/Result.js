import React from 'react';
import getResult from '../../propagation'

const Result = ({ expressionString, variablesList, prevResultDic, calculateResultFunction}) => {
    return(
        <div className="pv2 ph3 flex flex-column justify-start items-center w-100" role="ExpressionResult">
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

export default Result;