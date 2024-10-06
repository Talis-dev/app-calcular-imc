import { Button, StyleSheet } from 'react-native';
import React from "react"; 
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TextInput } from "react-native";
import ResultImc from './resultIMC';

export default function Form(){
    const [alturaValue, onChangeAltura] = React.useState('');
    const [pesoValue, onChangePeso] = React.useState('');
    const [mensageImc, onChangeMensage] = React.useState('preencha o peso e altura');
    const [Imc, onChangeImc] = React.useState('');
    const [textButton, onChangeTextButton] = React.useState('Calcular IMC');

    function imcCalculator() {
        // Converter os valores de string para número usando parseFloat
        const altura = parseFloat(alturaValue);
        const peso = parseFloat(pesoValue);

        // Verificar se as conversões resultaram em números válidos
        if (!isNaN(altura) && !isNaN(peso) && altura > 0) {
            const imc = peso / (altura * altura);
            onChangeImc(imc.toFixed(2)); // Arredondar para 2 casas decimais
        } else {
            onChangeImc('Dados inválidos');
        }
    }

    function validationImc() {
        if (pesoValue !== '' && alturaValue !== '') {
            imcCalculator();
            onChangeAltura('')
            onChangePeso('')
            onChangeMensage("Seu IMC é igual:");
            onChangeTextButton("Calcular Novamente");
        } else {
            onChangeMensage('Preencha o peso e altura corretamente.');
            onChangeImc('')
        }
    }

    return(
        <ThemedView>

          <ThemedView>
           <ThemedText className='text-center font-bold'>Altura</ThemedText> 

           <TextInput style={styles.input}
                   onChangeText={onChangeAltura}
                   value={alturaValue}
                   placeholder="Digite sua altura"
                   keyboardType="numeric"
                   ></TextInput>

           <ThemedText className='text-center font-bold text-red-600 '>Peso</ThemedText> 

           <TextInput style={styles.input}
            onChangeText={onChangePeso}
            value={pesoValue}
            placeholder="Digite seu peso"
            keyboardType="numeric"
           ></TextInput>  

           <Button
           color={'#058000'}
           onPress={()=>validationImc()}
           title={textButton}
           />
            

          </ThemedView>
          
            <ResultImc messageResultImc={mensageImc} ResultImc={Imc} />     
           
        
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    input: {
      color:'#f00000',
      fontSize:20,
      fontWeight:'bold',  
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlign:'center',
      backgroundColor:'#ffffff',
      borderRadius: 8,
    },
    buttonStyles:{
    borderRadius: 8,
    },
  });