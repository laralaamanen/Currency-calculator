import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [euros, setEuros] = useState(0);
  const [krona, setKrona] = useState(0);

  const calculate = () => {
    const result = euros.replace(',','.') * 11.85
    setKrona(result)

  }

  return (
    <View style={styles.container}>
      <Text>Euros</Text>
      <TextInput 
      placeholder='Enter amount of euros' 
        keyboardType='decimal-pad'
        value={euros}
        onChangeText={text => setEuros(text)}
        style={styles.field}
      />
      <Text style={styles.field} >Krona</Text>
      <Text  style={styles.field} > {krona.toFixed(2)} </Text>
      <Button title='Calculate' onPress={calculate} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 10,
  }
});
