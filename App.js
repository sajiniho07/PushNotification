import React, {Fragment} from 'react';
import {NativeModules, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Colors, Header,} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  let Najva = NativeModules.NajvaModule;
  Najva.initializeNajva();
    return (
        <Fragment>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header/>
                    <Text style={styles.sectionDescription}>
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Text>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Step One</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
