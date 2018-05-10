import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Paper } from 'react-native-paper';

class Quiz extends PureComponent {
    
    static propTypes = {
        onPressItem: PropTypes.func
    }

    state = {
        question: true
    }

    handleChangeQuestionToAnswer = () => {
        this.setState((state) => {
            return {question: !state.question}
        });
    }

    render() {
        const { question } = this.state;
        return (
                <Paper style={styles.paper}>
                    <View>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 20}}>2/2</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'space-around'}}>
                        {question
                        ? 
                            <View style={styles.paperViews}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 40, marginBottom: 20}}>Question?</Text>
                                <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='red' flat onPress={this.handleChangeQuestionToAnswer}>
                                    Answer
                                </Button>
                            </View>
                        :
                            <View style={styles.paperViews}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 40, marginBottom: 20}}>Answer...</Text>
                                <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='red' flat onPress={this.handleChangeQuestionToAnswer}>
                                    Question
                                </Button>
                            </View>
                        }
                        <View style={styles.paperViews}>
                            <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='green' raised onPress={() => alert('Correct')}>
                                Correct
                            </Button>
                            <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='red' raised onPress={() => alert('Incorrect')}>
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

export default Quiz;