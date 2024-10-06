import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Form from '@/components/Form';

export default function HomeScreen() {
  return (

      <ThemedView style={styles.titleContainer}>
        
     
         <ThemedText type="title">Bem vindo! </ThemedText> 
         <HelloWave />
         
       
        <Form />
   
      </ThemedView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 8,
    flex: 1,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
