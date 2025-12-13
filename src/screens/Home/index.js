import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{backgroundColor: '#9C9C9C', width: '100%', textAlign: 'center', marginTop: 5, marginBottom: 10, color: '#ffff'}}>Resumo rápido</Text>
          <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#D9D9D9', width: 342, height: 280, borderRadius: 10}}>
              <Text>Gráfico</Text>
          </View>

          <View style={{flexDirection:'row' , gap: 2, justifyContent: 'center', alignItems: 'center', width: 342, height: 170, borderRadius: 10}}>
            <View style={{borderWidth: 1, borderColor: '#D9D9D9', width: 113, height: 109, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text>Todos</Text><Text>1</Text></View>
            <View style={{borderWidth: 1, borderColor: '#D9D9D9', width: 113, height: 109, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text>Concluídos</Text><Text>1</Text></View>
            <View style={{borderWidth: 1, borderColor: '#D9D9D9', width: 113, height: 109, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}><Text>Pendentes</Text><Text>1</Text></View>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#D9D9D9', width: 342, height: 270, borderRadius: 10}}>
              <Text>Gráfico</Text>
          </View>
          
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
