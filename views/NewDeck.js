import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Paper } from 'react-native-paper';
import { addDeckToStorage } from '../actions'
import { connect } from 'react-redux';

class NewDeck extends PureComponent {
    
    static propTypes = {
        onPressItem: PropTypes.func
    }

    state = {
        text: ''
    };

    handleSubmit = () => {
        const {text} = this.state;
        this.props.addDeck({title: text}).then((result) => {
            this.props.navigation.navigate(
                'DeckDetail',
                { deckId: text }
            );     
            this.setState({
                text: ''
            })
        });
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

function mapStateToProps (deck) {
    return {
        deck
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addDeck: (param) => dispatch(addDeckToStorage(param))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewDeck);