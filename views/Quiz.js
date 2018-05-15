import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Paper, Modal } from 'react-native-paper';
import { connect } from 'react-redux';
import { fetchDeckAPI } from '../actions'

class Quiz extends PureComponent {
    
    state = {
        question: true,
        questionCount: 0,
        correctCount: 0,
        incorrectCount: 0,
    }

    componentDidMount () {
        const {navigation, getDeck} = this.props;
        const {deckId} = navigation.state.params;
        getDeck(deckId);        
    }

    handleChangeQuestionToAnswer = () => {
        this.setState((state) => {
            return {question: !state.question}
        });
    }

    handleCorrect = () => {
        const {deck, navigation} = this.props;
        const {questionCount, correctCount, incorrectCount} = this.state;
        if (deck.questions.length === questionCount + 1) {
            alert(`corrects: ${correctCount + 1} | incorrects: ${incorrectCount}`);
            navigation.goBack();
        } else {
            this.setState({
                correctCount: correctCount + 1,
                questionCount: questionCount + 1,
                question: true
            });
        }
    }

    handleIncorrect = () => {
        const {deck} = this.props;
        const {questionCount, incorrectCount, correctCount} = this.state;
        if (deck.questions.length === questionCount + 1) {
            alert(`corrects: ${correctCount} | incorrects: ${incorrectCount + 1}`);
            navigation.goBack();
        } else {
            this.setState({
                incorrectCount: incorrectCount + 1,
                questionCount: questionCount + 1,
                question: true
            });
        }
    }

    render() {
        const { deck } = this.props;
        const { question, questionCount } = this.state;
        return (
                <Paper style={styles.paper}>
                    <View>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 20}}>{questionCount + 1}/{deck.questions.length}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'space-around'}}>
                        {question
                        ? 
                            <View style={styles.paperViews}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 40, marginBottom: 20}}>{deck.questions[questionCount].question}</Text>
                                <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='red' flat onPress={this.handleChangeQuestionToAnswer}>
                                    Answer
                                </Button>
                            </View>
                        :
                            <View style={styles.paperViews}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 40, marginBottom: 20}}>{deck.questions[questionCount].answer}</Text>
                                <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='red' flat onPress={this.handleChangeQuestionToAnswer}>
                                    Question
                                </Button>
                            </View>
                        }
                        <View style={styles.paperViews}>
                            <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='green' disabled={question} raised onPress={this.handleCorrect}>
                                Correct
                            </Button>
                            <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='red' disabled={question} raised onPress={this.handleIncorrect}>
                                Incorrect
                            </Button>
                        </View>
                    </View>
                </Paper>
        );
    }
}

const styles = StyleSheet.create({
    paper: {
        flex: 1,
        padding: 10,
     },
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
)(Quiz);