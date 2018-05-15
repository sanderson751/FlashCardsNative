import React, { PureComponent } from 'react';
import PropTypes from  'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Paper } from 'react-native-paper';
import { connect } from 'react-redux';
import { fetchDeckAPI } from '../actions'

class DeckDetail extends PureComponent {
    
    static propTypes = {
        onPressItem: PropTypes.func
    }

    componentDidMount () {
        const {navigation, getDeck} = this.props;
        const {item} = navigation.state.params;
        getDeck(item.title);
    }

    handleAddCard = (item) => {
        this.props.navigation.navigate(
            'NewQuestion',
            { deckId: item.title }
        )
    }

    handleStartQuiz = (item) => {
        this.props.navigation.navigate(
            'Quiz',
            { deckId: item.title }
        )
    } 

    render() {
        const {deck: item} = this.props;
        console.log(item);
        return (
                <Paper style={styles.paper}>
                    <View style={styles.paperViews}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 40, marginBottom: 20}}>{item.title}</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize: 20, marginBottom: 20}}>{item.questions && item.questions.length} cards</Text>
                    </View>
                    <View style={styles.paperViews}>
                        <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} raised primary onPress={this.handleAddCard.bind(this, item)}>
                            Add Card
                        </Button>
                        <Button style={{alignSelf: 'center', marginTop: 20, width: 150}} color='black' raised onPress={this.handleStartQuiz.bind(this, item)}>
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