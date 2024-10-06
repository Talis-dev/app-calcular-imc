import React from "react"; 
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function ResultImc(props:any){
    return(
        <ThemedView>
            <ThemedText>
                {props.messageResultImc}
            </ThemedText>            
            <ThemedText>
                {props.ResultImc}
            </ThemedText>
        </ThemedView>
    )
}