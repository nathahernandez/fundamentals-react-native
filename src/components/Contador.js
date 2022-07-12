import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Style from './style';

export default (props) => {

    const [Count, useCount] = useState(0);

    const handlePressIncrement = () => useCount(Count + 1);

    const handlePressDecrement = () => {
        
        if(Count <= 0) {
            return
        }
        else{
            useCount(Count - 1);
        }
    }
    
    return (
        <>
            <Button 
                title='Increment'
                onPress={handlePressIncrement}
            />
            <Button 
                title='Decrement'
                onPress={handlePressDecrement}
            />
            <Text style={Style.FontG}>
                {Count}
            </Text>
        </>
    )
}