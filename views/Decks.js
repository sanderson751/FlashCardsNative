import React, { PureComponent } from 'react';
import { View } from 'react-native';
import DeckList from '../components/DeckList'

class Decks extends PureComponent {
    
    onPress = (item) => {
        alert(item.key);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <DeckList onPressItem={this.onPress} />
            </View> 
        );
    }
}

export default Decks;