import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import BG from './assets/background.jpg';

function Detail( {route} ) {
  const filmDetail = route.params.params.items;
  const basePhotoURL = "https://image.tmdb.org/t/p/w500";
  return (
    <SafeAreaView style={styles.container}>
        <View>
        <Image blurRadius={15} source={{uri:`${basePhotoURL}${filmDetail.poster_path}`}} style={styles.bgimage} />
        <View style={{display:'flex', flexDirection:'column', width:'80%', position:'absolute', left:'10%', marginTop:24}}>
                <Image style={{width:'90%', height:420, left:'5%', borderRadius:20, marginBottom:24}} source={{uri:`${basePhotoURL}${filmDetail.poster_path}`}} />
            <View style={{width:'100%', backgroundColor:'#33333375'}}>
                <Text style={{color:'white', fontSize:24, fontWeight:'bold', textTransform:'uppercase', textAlign:'center', marginBottom:18}}>
                    {filmDetail?.title}
                </Text>
                <Text style={{color:'white', fontSize:20, fontWeight:'bold', textAlign:'center'}}>
                    {filmDetail?.overview}
                </Text>
            </View>

        </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    backgroundImage: {
    },
    container: {
        flex: 1,
      },
      bgimage: {
        position:'fixed',
        width:'100%',
        height: '105%'
      },
      containerInside: { zIndex:10, marginTop:40, width:'95%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'
      },
      cardPhoto: {
        width:'80%',
        height:560
      },
      ImageCard: {
        width:'100%',
        height:'100%',
        borderRadius:20
      }
})

export default Detail