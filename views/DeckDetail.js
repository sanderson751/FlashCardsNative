import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, FlatList, StyleSheet, Animated } from 'react-native';
import { Button, TextInput, Text, Paper } from 'react-native-paper';
import { connect } from 'react-redux';
import { fetchDeckAPI } from '../actions'

class DeckDetail extends PureComponent {
    
    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount () {
        Animated.timing(
        this.state.fadeAnim,
        {
            toValue: 1,
            duration: 2000,
        }
        ).start();
        const {navigation, getDeck} = this.props;
        const {deckId} = navigation.state.params;
        getDeck(deckId);
    }

    handleAddCard = (deck) => {
        this.props.navigation.navigate(
            'NewQuestion',
            { deckId: deck.title }
        )
    }

    handleStartQuiz = (deck) => {
        this.props.navigation.navigate(
            'Quiz',
            { deckId: deck.title }
        )
    } 

    render() {
        const {deck} = this.props;
        let { fadeAnim } = this.state;
        return (
                <Animated.View style={{
                    flex: 1,
                    padding: 20,
                    margin: 20,
                    justifyContent: 'space-around',
                    opacity: fadeAnim,
                  }}>
                    <View style={styles.paperViews}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 40, marginBottom: 20}}>{deck.title}</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 20, marginBottom: 20}}>{deck.questions && deck.questions.length} cards</Text>
                    </View>
                    <View style={styles.paperViews}>
                        <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} raised primary onPress={this.handleAddCard.bind(this, deck)}>
                            Add Card
                        </Button>
                        <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='black' raised onPress={this.handleStartQuiz.bind(this, deck)}>
                            Start Quiz
                        </Button>
                    </View>
                </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    paperViews: {
       alignItems: 'center'
    }
});

function mapStateToProps (deck) {
    return {
        deck
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getDeck: (deckId) => dispatch(fetchDeckAPI(deckId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckDetail);