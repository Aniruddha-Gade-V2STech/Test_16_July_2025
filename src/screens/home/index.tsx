import { StyleSheet, View } from 'react-native';
import React from 'react';
import TabNavigations from '../../navigations/Tabs/TabNavigations';

const Home = () => {
  return (
    <View style={styles.container}>
      <TabNavigations />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
