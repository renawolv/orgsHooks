import React, { useEffect, useState } from "react";
import { Text, FlatList, StyleSheet } from "react-native";

import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = useProdutores();

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    }

    return <FlatList 
        style={estilos.lista}
        data={lista.sort((a,b) => { return a.distancia - b.distancia; })} 
        ListHeaderComponent={TopoLista()} 
        renderItem={({ item }) => <Produtor {...item} />} 
        keyExtractor={({nome}) => nome}
    />
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: "#fff"
    },
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    }
})