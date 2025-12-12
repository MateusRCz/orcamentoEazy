import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{marginTop: 400, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Lista de relatórios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
