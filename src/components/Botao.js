import React from 'react';
import { Button } from 'react-native';

export default (props) => {

    const Executar = () => console.warn("Executou");
    
    return (
        <Button
            title="Executar"
            onPress={Executar}
        />
   
    )
}