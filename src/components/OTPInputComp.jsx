import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const OTPInputComp = ({ length = 4, onOTPChange }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const [focusedIndex, setFocusedIndex] = useState(null);
    const inputsRef = useRef([]);

    // Auto-focus on the first input when component loads
    useEffect(() => {
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
    }, []);

    const handleChange = (text, index) => {
        if (text.length > 1) { return; } // Prevent pasting multiple characters
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        onOTPChange && onOTPChange(newOtp.join(''));

        if (text && index < length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace') {
            const newOtp = [...otp];

            if (newOtp[index]) {
                // If current input has value, clear it first
                newOtp[index] = '';
            } else if (index > 0) {
                // If already empty, move to the previous input and clear it
                newOtp[index - 1] = '';
                inputsRef.current[index - 1].focus();
            }

            setOtp(newOtp);
            onOTPChange && onOTPChange(newOtp.join(''));
        }
    };

    return (
        <View style={styles.container}>
            {otp.map((value, index) => (
                <TextInput
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    style={[
                        styles.input,
                        focusedIndex === index && styles.focusedInput,
                    ]}
                    keyboardType="numeric"
                    maxLength={1}
                    value={value}
                    onChangeText={(text) => handleChange(text, index)}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
    },
    input: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.OTPBoxBorder,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: Colors.OTPBoxBg,
        color: Colors.TextColor1,
    },
    focusedInput: {
        borderColor: Colors.OTPBoxBorder,
        borderWidth: 2,
    },
});

export default OTPInputComp;
