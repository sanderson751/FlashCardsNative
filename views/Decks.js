import React, { PureComponent } from 'react';
import { View } from 'react-native';
import DeckList from '../components/DeckList';
import { connect } from 'react-redux';
import { fetchDecksAPI } from '../actions'

class Decks extends PureComponent {

    componentDidMount () {
        const {requestDecks}  = this.props;
        requestDecks && requestDecks();
      }
    
    onPress = (item) => {
        this.props.navigation.navigate(
            'DeckDetail',
            { item }
        )
    }

    render() {
        const {decks} = this.props;
        return (
            <View style={{flex: 1}}>
                <DeckList items={decks} onPressItem={this.onPress} />
            </View> 
        );
    }
}

function mapStateToProps (decks) {
    return {
        decks
    }
}

function mapDispatchToProps (dispatch) {
    return {
        requestDecks: () => dispatch(fetchDecksAPI())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Decks);