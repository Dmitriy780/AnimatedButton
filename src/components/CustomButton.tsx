/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CheckIcon = require('../assets/images/check.png');

type ButtonProps = {
    style?: StyleProp<ViewStyle>
    title: string
}

const CustomButton: React.FC<ButtonProps> = ({ title, style }) => {
    const [disabled, setDisabled] = useState(false);
    const opacity1 = useState(new Animated.Value(1))[0];
    const opacity2 = useState(new Animated.Value(0))[0];
    const opacity3 = useState(new Animated.Value(0))[0];

    const Effect1_In = () => {
        Animated.timing(opacity1, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    const Effect2_In = () => {
        Animated.timing(opacity2, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    const Effect2_Out = () => {
        Animated.timing(opacity2, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    const Effect3_In = () => {
        Animated.timing(opacity3, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    const onPressMe = () => {
        setDisabled(true);
        Effect1_In();
        Effect2_In();
        setTimeout(() => {
            Effect2_Out();
            Effect3_In();
        }, 1000);
    }

    return (
        <View style={style}>
            <TouchableOpacity onPress={onPressMe} style={
                {
                    zIndex: 3,
                }}
                disabled={disabled}
            >
                <Animated.View
                    style={{
                        opacity: opacity1,
                    }}
                >
                    <LinearGradient colors={['#EC2E90', '#8E57EC']}
                        style={styles.container}
                        start={{ x: 0.3, y: 1.0 }} end={{ x: 0.8, y: 0 }}
                    >
                        <Text style={{ color: 'white' }}>
                            {title}
                        </Text>
                    </LinearGradient>

                </Animated.View>
            </TouchableOpacity>

            <Animated.View
                style={[
                    {
                        position: 'absolute',
                        opacity: opacity2,
                        zIndex: 2,
                    }
                ]}
            >
                <LinearGradient colors={['#EC2E90', '#8E57EC']}
                    style={styles.container}
                    start={{ y: 1.0, x: 0.0 }} end={{ y: 0, x: 1.0 }}>
                    <Image source={CheckIcon} style={styles.icon} />
                </LinearGradient>
            </Animated.View>

            <Animated.View
                style={[
                    styles.container,
                    {
                        position: 'absolute',
                        opacity: opacity3,
                        zIndex: 1,
                    }
                ]}
            >
                <Text style={{ color: '#333333' }}>
                    Joined
                </Text>
            </Animated.View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 30,
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: 'white',
    }
});

export default CustomButton;
