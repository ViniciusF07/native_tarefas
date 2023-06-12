import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native"

import database from "../../config/firebaseconfig.js"
import styles from "./style.js"



export default function NovaTarefa({navigation}){
    const [description, setDescricao] = useState(null)
    
    
    function addTarefa(){
        database.collection("Tarefas").add({
            description: description,
            status: false
        })
        navigation.navigate("Tarefas")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput style={styles.input}
            placeholder="Ex: Estudar react native"
            onChangeText={setDescricao}
            value={description}/>
            <TouchableOpacity 
            style={styles.novaTarefa}
            onPress={()=>{
                addTarefa()
            }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}