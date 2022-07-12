import React from 'react';
import { Text } from 'react-native';
import Style from './style'

export default (props) => 
    {
    const { min, max } = props;

    const a = parseInt( Math.random() * (max - min) + min);
    const b = parseInt( Math.random() * (max - min) + min);

    if(a > b){
        return (
            <Text 
                style={Style.MinMax}
            >
                O valor {a} é maior que o valor {b}
            </Text>
        );
    }
    else if(b > a) {
        return (
            <Text 
                style={Style.MinMax}
            >
                O valor {b} é maior que o valor {a}
            </Text>
        );
    }
    else if(a === b){
        return (
            <Text 
                style={Style.MinMax}
            >
                O valor {a} é igual ao valor {b}
            </Text>
        )
    }

}