import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';

class DeckList extends PureComponent {
    
    static propTypes = {
        onPressItem: PropTypes.func,
        items: PropTypes.object,
    }

    onPress = (item) => {
        const { onPressItem } = this.props;
        onPressItem && onPressItem.call(this, item);
    }

    renderItems = ({item}) => {
        if (item.title) {
            return (
                <TouchableOpacity onPress={this.onPress.bind(this, item)}>
                    <View style={{borderBottomWidth: 0.5, paddingTop: 25, paddingBottom: 25, alignContent:'center', alignItems: 'center'}}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 20, padding: 4}}>{item.title}</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{color: 'gray'}}>{item.questions.length} cards</Text>
                    </View>
                </TouchableOpacity>
            )
        }       
    }

    render() {
        const {items} = this.props;
        return (
            <FlatList
                data={Object.values(items)}
                renderItem={this.renderItems}
            />
      );
    }
}

export default DeckList;