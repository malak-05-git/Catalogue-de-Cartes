import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// export par défaut
export default function CardItem({ title, description, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3, // ombre Android
    shadowColor: '#000', // ombre iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cover: { width: '100%', height: 150 },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  desc: { color: '#555' }
});
