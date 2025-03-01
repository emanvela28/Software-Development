import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Home Screen
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

// Dashboard Screen
const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Dashboard Screen</Text>
    </View>
  );
};

// Truck Screen
const TruckScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Truck Screen</Text>
    </View>
  );
};

// Create Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Truck') {
              iconName = focused ? 'car' : 'car-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E86C1', // Active tab color
          tabBarInactiveTintColor: 'gray', // Inactive tab color
          tabBarStyle: { backgroundColor: '#f8f9fa', height: 60 }, // Tab bar styling
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Truck" component={TruckScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
