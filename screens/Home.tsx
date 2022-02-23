import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import i18n from 'i18n-js';
import Section from '../components/Section';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={i18n.t('home.stepOne.title')}>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your
            edits.
          </Section>
          <Section title={i18n.t('home.changes.title')}>
            <ReloadInstructions />
          </Section>
          <Section title={i18n.t('home.debug.title')}>
            <DebugInstructions />
          </Section>
          <Section title={i18n.t('home.learnMore.title')}>{i18n.t('home.learnMore.content')}</Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
