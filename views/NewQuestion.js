import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Paper } from 'react-native-paper';
import { addCardToDeckStorage } from '../actions';
import { connect } from 'react-redux';

class NewQuestion extends PureComponent {
    
    state = {
        question: '',
        answer: ''
    };

    handleOnPress = (deckId) => {
        const {question, answer} = this.state;
        this.props.addCard({title: deckId, questions: [{question, answer}]});
    }

    render() {
        const {navigation} = this.props;
        const {deckId} = navigation.state.params;
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
                    <Button style={{alignSelf: 'center', marginTop: 20}} raised primary onPress={this.handleOnPress.bind(this, deckId)}>
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

function mapStateToProps (decks) {
    return {
        decks
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addCard: (param) => dispatch(addCardToDeckStorage(param))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewQuestion);