import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const studentsData = [
  { id: 1, name: 'Andy Pineda', carnet: '20190453', photo: require('../img/andy.png') },
  { id: 2, name: 'Dominic Mejía', carnet: '20220211', photo: require('../img/dom.png') }
];

const StudentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {studentsData.map(student => (
        <Card key={student.id} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Cover source={student.photo} style={styles.imagen} />
            <Title style={styles.title}>{student.name}</Title>
            <Paragraph style={styles.text}>Carnet: {student.carnet}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    marginTop: 130,
    marginBottom: 0,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#000',
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardContent: {
    alignItems: 'center',
  },
  title: {
    color: '#fff', 
    marginBottom: 10, 
  },
  text: {
    color: '#fff', 
  },
});

export default StudentsScreen;
