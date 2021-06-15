import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View, Content, Toast } from 'native-base';

export default () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.splashText}>𑇄 𑆱𑇀𑆮𑆱𑇀𑆠𑆴 𑇚 𑆱𑆴𑆢𑇀𑆣𑆁</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 10,
        marginRight: 15,
        
    },
    splashText: {
        fontFamily: 'Sharada',
        fontSize: 50,
    }
});
