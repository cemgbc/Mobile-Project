import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BG from './assets/background.jpg';
import Detail from './Detail';
export default function Film( {navigation} ) {

  const [data, setData] = useState([]);
  const basePhotoURL = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8348c82cbf0c00dd0954a8fd1cc70035")
      .then(res => {
        console.log(res);
        setData(res?.data)
      })
      .catch(error => {
        console.log(error)
      })
  
  }, []);


  return (
   
      <SafeAreaView>
        <ImageBackground blurRadius={10} source={BG} resizeMode='cover' style={styles.backgroundImage}>
       <ScrollView>
    <View style={styles.container}>
      <View style={styles.containerInside}>
        {data?.results?.map((item, index) => {
          return (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("Film Details",{ screen:"Detail", params:{items : item} } )} key={index} style={styles.card}>
    <Image style={styles.ImageCard} source={{uri:`${basePhotoURL}${item?.poster_path}`}}/>
    <View style={{display:'flex', justifyContent:'center', alignItems:'center', height:60, width:'100%'}}>
        <Text style={{ marginVertical:'auto', width:'100%', textAlign:'center', color:'white', textTransform:'uppercase', fontSize:16, }}>{item?.original_title}</Text>
      </View>
      </TouchableOpacity>
      </View>
          )
        })}
      
      </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </ImageBackground>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
  },
  containerInside: {
    backgroundColor:'transparent', zIndex:10, marginTop:40, width:'95%', display:'flex', justifyContent:'space-evenly', alignItems:'center', flexDirection:'row', flexWrap:'wrap'
  },
  ImageCard: {
    zIndex: 15,
    width:'100%',
    height:240,
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  card: {
    shadowColor: "#ddd",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 12, display:'flex', justifyContent:'center', alignItems:'center', width: 168,  backgroundColor:'#33333320', marginBottom:20
  }
});
