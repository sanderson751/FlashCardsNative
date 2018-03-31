import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Paper } from 'react-native-paper';

class NewQuestion extends PureComponent {
    
    static propTypes = {
        onPressItem: PropTypes.func
    }

    state = {
        questionValue: '',
        answerValue: ''
    };

    onPress = (item) => {
        const { onPressItem } = this.props;
        onPressItem && onPressItem.call(this, item);
    }

    render() {
        const { questionValue, answerValue } = this.state;
        return (
                <Paper style={styles.paper}>
                    <TextInput
                        label='Question'
                        value={questionValue}
                        onChangeText={questionValue => this.setState({ questionValue })}
                    />
                    <TextInput
                        label='Answer'
                        value={answerValue}
                        onChangeText={answerValue => this.setState({ answerValue })}
                    />
                    <Button style={{alignSelf: 'center', marginTop: 20}} raised primary onPress={() => alert('Pressed')}>
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

export default NewQuestion;