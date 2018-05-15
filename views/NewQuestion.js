import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Paper } from 'react-native-paper';
import { addCardToDeckStorage, fetchDeckAPI } from '../actions';
import { connect } from 'react-redux';

class NewQuestion extends PureComponent {
    
    state = {
        question: '',
        answer: ''
    };

    componentDidMount () {
        const {navigation, getDeck} = this.props;
        const {deckId} = navigation.state.params;
        getDeck(deckId);
    }

    handleOnPress = (deck) => {
        const {question, answer} = this.state;
        const {navigation, addCard} = this.props;
        addCard({title: deck.title, questions: [{question, answer}]}, deck);
        navigation.goBack();
    }

    render() {
        const {deck} = this.props;
        //const {deckId} = navigation.state.params;
        const { question, answer } = this.state;
        return (
                <Paper style={styles.paper}>
                    <TextInput
                        label='Question'
                        value={question}
                        onChangeText={question => this.setState({ question })}
                    />
                    <TextInput
                        label='Answer'
                        value={answer}
                        onChangeText={answer => this.setState({ answer })}
                    />
                    <Button style={{alignSelf: 'center', marginTop: 20}} raised primary onPress={this.handleOnPress.bind(this, deck)}>
                        Submit
                    </Button>
                </Paper>
        
        );
    }
}

const styles = StyleSheet.create({
    paper: {
        padding: 20,
        margin: 20,
        justifyContent: 'center',
     },
});

function mapStateToProps (deck) {
    return {
        deck
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getDeck: (deckId) => dispatch(fetchDeckAPI(deckId)),
        addCard: (param, deck) => dispatch(addCardToDeckStorage(param, deck))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewQuestion);