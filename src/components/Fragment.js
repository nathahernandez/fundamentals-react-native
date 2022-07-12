import React from 'react';
import { View, Tex } from 'react-native';
import Style from './style';

export default (props) => {
    return (
        <>
            <Text style={Style.FontG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    );
}