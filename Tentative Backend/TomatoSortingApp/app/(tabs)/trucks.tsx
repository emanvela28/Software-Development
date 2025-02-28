import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrucksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚚 Trucks Page 🚚</Text>
      <Text>Here you can view all trucks and their details.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
