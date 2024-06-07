import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import { getAllPostsService } from '../services/TestServices'
import { createPostService } from '../services/TestServices'
import { updatePostService } from '../services/TestServices'
import { createProductService } from '../services/TestServices'
import { pokeApi } from '../services/TestServices'
import { getByUserIdService } from '../services/TestServices'
import { updateCuckService } from '../services/TestServices'
import { getDocumentTypes } from '../services/TestServices'

const getAllPosts = () => {
  getAllPostsService();
}
const createPost = () => {
  createPostService();
}
const updatePost = () => {
  const pstaData = {
    id: 1,
    title: "mensaje",
    body: "suerte en tu evaluación",
    userld: 1
  }
  updatePostService(pstaData);
}

const getByUserId = () => {
  getByUserIdService();
}

const getPoke = () => {
  pokeApi();
}

const createpructs = () => {
  createProductService();
}
const updateCuck = () => {
  const pstaData =   {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
        rate: 3.9,
        count: 120
    }
}
  updateCuckService(pstaData);
}


export const TestWebServices = () => {

  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPosts}
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
      <Button
        title="Actualizar Post"
        onPress={updatePost}
      />
      <Button
        title="Filtrar"
        onPress={getByUserId}
      />
      <Button
        title="XXX"
        onPress={getPoke}
      />

      <Button
        title="YYY"
        onPress={createpructs}
      />

      <Button
        title="ZZZ"
        onPress={updateCuck}
      />
      <Button
        title="TIPOS DE DOCUMENTOS"
        onPress={getDocumentTypes}
      />


    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal: 10

  }
});