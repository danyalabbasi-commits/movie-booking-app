import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useBooking } from '../context/BookingContext';

export default function BookingsScreen() {
  const { bookings } = useBooking();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Booked Tickets 🎫</Text>
      
      {bookings.length === 0 ? (
        <Text style={styles.emptyText}>No bookings found yet. Go book a movie!</Text>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.movieTitle}>{item.movie}</Text>
                <Text style={styles.ticketInfo}>Name: {item.name}</Text>
                <Text style={styles.ticketInfo}>Seats: {item.seats.join(', ')}</Text>
              </View>
              <Text style={styles.price}>₹{item.total}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  header: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  emptyText: { color: '#888', fontSize: 16, textAlign: 'center', marginTop: 40 },
  card: { 
    backgroundColor: '#1f1f1f', 
    padding: 15, 
    borderRadius: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 12
  },
  movieTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  ticketInfo: { fontSize: 14, color: '#aaa', marginBottom: 2 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#28a745' }
});