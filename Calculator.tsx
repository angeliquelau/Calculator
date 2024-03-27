import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Calculator = () => {
    const [input, setInput] = useState('0');
    const handleInput = (value: string) => {
        if(value == 'C') {
            setInput('0');
        }
        else {
            setInput(input == '0' ? value : input + value);
        }
    };
    const handleCalculate = () => {
        try {
            const result = eval(input);
            setInput(Number.isFinite(result) ? result.toString() : 'Error');
        } catch (error) {
            setInput('Error');
        }
    };

    const layout = [
        [
            {inputValue: '7', displayText: '7', style: styles.button, handler: handleInput},
            {inputValue: '8', displayText: '8', style: styles.button, handler: handleInput},
            {inputValue: '9', displayText: '9', style: styles.button, handler: handleInput},
            {inputValue: '/', displayText: '÷', style: styles.operatorButton, handler: handleInput},
        ],

        [
            {inputValue: '4', displayText: '4', style: styles.button, handler: handleInput},
            {inputValue: '5', displayText: '5', style: styles.button, handler: handleInput},
            {inputValue: '6', displayText: '6', style: styles.button, handler: handleInput},
            {inputValue: '*', displayText: '×', style: styles.operatorButton, handler: handleInput},
        ],

        [
            {inputValue: '1', displayText: '1', style: styles.button, handler: handleInput},
            {inputValue: '2', displayText: '2', style: styles.button, handler: handleInput},
            {inputValue: '3', displayText: '3', style: styles.button, handler: handleInput},
            {inputValue: '-', displayText: '-', style: styles.operatorButton, handler: handleInput},
        ],

        [
            {inputValue: '0', displayText: '0', style: styles.button, handler: handleInput},
            {inputValue: '.', displayText: '.', style: styles.button, handler: handleInput},
            {inputValue: 'C', displayText: 'C', style: styles.clearButton, handler: handleInput},
            {inputValue: '+', displayText: '+', style: styles.operatorButton, handler: handleInput},
        ],
        [
            {inputValue: '=', displayText: '=', style: styles.calculateButton, handler: handleCalculate}
        ]
    ]

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline={false} style={styles.input} editable={false}>
                    {input}
                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                {/* getting the each rows of the layout */}
                {layout.map(rows => (
                    <View style={styles.row}>
                        {/* getting each of the element in the row */}
                        {rows.map(row => (
                            <TouchableOpacity
                            key={row.inputValue}
                            style={row.style}
                            onPress={() => row.handler(row.inputValue)}>   
                                <Text style={styles.buttonText}>
                                    {row.displayText}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2, //divide the view into 2 containers
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 40,
    },
    buttonContainer: {
        flex: 3,
        justifyContent: 'space-around',
    },
    inputContainer: {
        height: 160,
        justifyContent: 'flex-end',
    },
    input: {
        fontSize: 48,
        color: '#fff',
        textAlign: 'right',
    },
    button: {
        backgroundColor: '#505050',
        flex: 1,
        borderRadius: 45,
        margin: 6,
        paddingHorizontal: 16,
        paddingVertical: 25,
    },
    calculateButton: {
        backgroundColor: '#FF9500',
        borderRadius: 38,
        padding: 16,
        width: '100%'
    },
    operatorButton: {
        backgroundColor: '#FF9500',
        flex: 1,
        borderRadius: 45,
        margin: 6,
        paddingHorizontal: 16,
        paddingVertical: 27,
    },
    clearButton: {
        backgroundColor: '#808080',
        flex: 1,
        borderRadius: 45,
        margin: 6,
        paddingHorizontal: 16,
        paddingVertical: 27,
    },
    row: {
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        color: '#fff'
    }
});
export default Calculator;