import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { BookingProvider } from '../context/BookingContext';

export default function RootLayout() {
  return (
    <BookingProvider>
      <Tabs screenOptions={{ 
        tabBarStyle: { backgroundColor: '#1f1f1f', borderTopColor: '#333' },
        tabBarActiveTintColor: '#007AFF',
        headerStyle: { backgroundColor: '#1f1f1f' },
        headerTintColor: '#fff',
      }}>
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: 'Movies', 
            tabBarIcon: ({ color, size }) => <Ionicons name="film" size={size} colour={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="bookings" 
          options={{ 
            title: 'My Bookings', 
            tabBarIcon: ({ color, size }) => <Ionicons name="ticket" size={size} colour={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{ 
            title: 'Profile', 
            tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} colour={color} /> 
          }} 
        />
        <Tabs.Screen 
          name="details/[id]" 
          options={{ href: null, headerTitle: 'Book Tickets' }} 
        />
      </Tabs>
    </BookingProvider>
  );
}