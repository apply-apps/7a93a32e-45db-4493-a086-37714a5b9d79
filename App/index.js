// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [recipient, setRecipient] = useState('');
    const [occasion, setOccasion] = useState('');
    const [style, setStyle] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleGenerateGreeting = () => {
        setGreeting(`Dear ${recipient},\n\nWishing you a wonderful ${occasion}!\nHave a ${style} day!`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>Personalized Greetings</Text>
                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        placeholder="Recipient"
                        placeholderTextColor="#CCCCCC"
                        value={recipient}
                        onChangeText={setRecipient}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Occasion"
                        placeholderTextColor="#CCCCCC"
                        value={occasion}
                        onChangeText={setOccasion}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Style of Greeting"
                        placeholderTextColor="#CCCCCC"
                        value={style}
                        onChangeText={setStyle}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Generate Greeting" color="#8A2BE2" onPress={handleGenerateGreeting} />
                    </View>
                    
                    {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    scrollView: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    box: {
        width: '100%',
        backgroundColor: '#1E1E1E',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    input: {
        color: '#FFFFFF',
        backgroundColor: '#333333',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderColor: '#8A2BE2',
        borderWidth: 1,
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    greeting: {
        color: '#FFFFFF',
        marginTop: 20,
        fontSize: 18,
    },
});