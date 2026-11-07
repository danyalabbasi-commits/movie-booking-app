import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const MOVIES = [
  { id: '1', title: 'Inception', genre: 'Sci-Fi / Thriller' },
  { id: '2', title: 'Interstellar', genre: 'Adventure' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Now Showing 🎬</Text>
      <FlatList
        data={MOVIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => router.push(`/details/${item.id}?title=${item.title}`)}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.genre}>{item.genre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  card: { backgroundColor: '#1f1f1f', padding: 20, borderRadius: 10, marginBottom: 15 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  genre: { fontSize: 14, color: '#aaa' }
});
