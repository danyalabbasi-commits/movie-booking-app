import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetailsScreen() {
  const { title } = useLocalSearchParams();
  const router = useRouter();
  const [tickets, setTickets] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>Tickets: {tickets}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => setTickets(Math.max(1, tickets - 1))}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setTickets(tickets + 1)}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.bookBtn} 
        onPress={() => Alert.alert("Success", "Tickets Booked!", [{ text: "OK", onPress: () => router.back() }])}
      >
        <Text style={styles.bookText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  text: { fontSize: 18, color: '#fff', marginBottom: 20 },
  row: { flexDirection: 'row', gap: 20, marginBottom: 30 },
  btn: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8 },
  btnText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  bookBtn: { backgroundColor: '#28a745', padding: 15, borderRadius: 8 },
  bookText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});