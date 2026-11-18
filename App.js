import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.fbi.gov/wanted/v1/list')
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch(() => setError('Erro ao carregar dados'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={styles.center} size="large" />;
  if (error) return <Text style={styles.center}>{error}</Text>;

  return (
    <FlatList
      style={styles.list}
      data={items}
      keyExtractor={(item) => item.uid}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {item.images?.[0] && (
            <Image source={{ uri: item.images[0].thumb }} style={styles.photo} />
          )}
          <Text style={styles.name}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, textAlign: 'center', textAlignVertical: 'center' },
  list: { marginTop: 50, padding: 16 },
  card: { backgroundColor: '#f2f2f2', padding: 16, borderRadius: 8, marginBottom: 12 },
  photo: { width: '100%', height: 200, borderRadius: 8, marginBottom: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
});