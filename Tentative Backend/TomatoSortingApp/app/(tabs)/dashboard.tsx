import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './types'; // ✅ Relative import


// Define navigation type
type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'dashboard'>;

// Define the Truck type
type Truck = {
  id: number;
  license_plate: string;
  status: string;
};

export default function DashboardScreen() {
  const [trucks, setTrucks] = useState<Truck[]>([]);
  const navigation = useNavigation<DashboardScreenNavigationProp>(); // ✅ Use typed navigation

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/trucks')
      .then(response => response.json())
      .then((data: Truck[]) => setTrucks(data))
      .catch(error => console.error('Error fetching trucks:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text>🚛 Welcome to the Dashboard! 🚛</Text>

      <FlatList
        data={trucks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.license_plate} - {item.status}</Text>
        )}
      />

      {/* ✅ Now TypeScript knows 'trucks' exists in the navigation */}
      <Button title="Go to Trucks" onPress={() => navigation.navigate('trucks')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
