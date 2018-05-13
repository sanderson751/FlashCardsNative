import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Paper } from 'react-native-paper';
import { saveDeckTitle } from '../utils/api'

class NewDeck extends PureComponent {
    
    static propTypes = {
        onPressItem: PropTypes.func
    }

    state = {
        text: ''
    };

    handleSubmit = () => {
        console.log(saveDeckTitle({title: this.state.text}).then(result => {return result}));
        this.props.navigation.navigate(
            'NewQuestion',
            { deckId: 'deckId' }
        )     
    }

    render() {
      return (
            <Paper style={styles.paper}>
                <Text style={{fontSize:24, padding:10, textAlign: 'center'}}>What is the title of your new deck?</Text>
                <TextInput
                    label='Deck title'
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
                <Button style={{alignSelf: 'center', marginTop: 20}} raised primary onPress={this.handleSubmit}>
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

export default NewDeck;