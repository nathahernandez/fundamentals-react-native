import React from 'react';
import Helloworld from './components/Helloworld';
import Second from './components/Second';
import { Component1, Component2, Component3 } from './components/Multiplos';
import { View } from 'react-native';
import Style from './components/style';
import MinMax from './components/MinMax';
import MinMaxRandom from './components/Aleatorio';
import Titulo from './components/Fragment';
import Botao from './components/Botao';
import Contador from './components/Contador';
export default () => 
    (
        <View style={Style.App}>
            <Contador />
            {/*<Botao />
             <Titulo
                principal="Titulo principal"
                secundario="Titulo Secundario"
            />
            <Helloworld />
            <Second />
            <Component1 />
            <Component2 />
            <Component3 />
            <MinMax min={3} max={30}/>
            <MinMaxRandom min={1} max={25}/> */}
        </View>
    );
