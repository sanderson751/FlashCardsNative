import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Paper } from 'react-native-paper';

class DeckDetail extends PureComponent {
    
    static propTypes = {
        onPressItem: PropTypes.func
    }

    handleAddCard = () => {
        this.props.navigation.navigate(
            'NewDeck',
            { deckId: 'deckId' }
        )
    }

    handleStartQuiz = () => {
        this.props.navigation.navigate(
            'Quiz',
            { quizId: 'quizId' }
        )
    } 

    render() {
        return (
                <Paper style={styles.paper}>
                    <View style={styles.paperViews}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 40, marginBottom: 20}}>Titulo do deck</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 20, marginBottom: 20}}>3 cards</Text>
                    </View>
                    <View style={styles.paperViews}>
                        <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} raised primary onPress={this.handleAddCard}>
                            Add Card
                        </Button>
                        <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='black' raised onPress={this.handleStartQuiz}>
                            Start Quiz
                        </Button>
                    </View>
                </Paper>
        
        );
    }
}

const styles = StyleSheet.create({
    paper: {
        flex: 1,
        padding: 20,
        margin: 20,
        justifyContent: 'space-around',
     },
     paperViews: {
        alignItems: 'center'
     }

  });

export default DeckDetail;