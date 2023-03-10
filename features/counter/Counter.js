import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, add, multiply } from './counterSlice'
import {View, Button, TextInput, StyleSheet, TouchableOpacity, Text} from "react-native";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const [myNumber, setMyNumber] = useState(0);
    const dispatch = useDispatch()

    return (
        <>
        <View>
            <View>
                <Button
                    title={"increment"}
                    aria-label="Increment value"
                    onPress={() => dispatch(increment())}
                >
                    Increment
                </Button>
                <span>{count}</span>
                <Button
                    title={"decrement"}
                    aria-label="Decrement value"
                    onPress={() => dispatch(decrement())}
                >
                    Decrement
                </Button>
                <Button
                    title={"RAZ"}
                    aria-label="raz"
                    onPress={() => dispatch(reset())}
                >
                    RAZ
                </Button>

                <Button
                    title={"add more"}
                    aria-label="Add value"
                    onPress={() => dispatch(add(parseInt(myNumber)))}
                >
                    Add
                </Button>
                <Button
                    title={ "multiply" }
                    aria-label="Multiply value"
                    onPress={() => dispatch(multiply(parseInt(myNumber)))}
                >
                    Multiply
                </Button>
                <TextInput
                    style={styles.input}
                    onChangeText={(number) => setMyNumber(number)}
                    value={ myNumber }
                    keyboardType="numeric"
                />
            </View>

        </View>

        </>


    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});