import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imag from '../../../assets/image.png' 

export default function Login() {

  const navigation = useNavigation();

  return (

    <View style={styles.container}>

      <Image style={{width: 141, height: 155}} source={imag}/>

      <View>
        <TextInput placeholder= 'Usuário' style={{textAlign: 'center', fontSize: 12,  marginTop: 30, width: 278, height: 35, borderWidth: 1, borderColor: '#B6B6B6' }}/>
        <TextInput placeholder= 'Senha' style={{textAlign: 'center', fontSize: 12,  marginTop: 30, width: 278, height: 35, borderWidth: 1, borderColor: '#B6B6B6' }}/>
      </View>

      <Pressable onPress={() => navigation.navigate("TabRoutes")} style={{marginTop: 30, width: 278, height: 35, backgroundColor: '#4BA148', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#ffff'}}>Entrar</Text>
      </Pressable>
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
