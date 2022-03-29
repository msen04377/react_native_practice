import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s";

    return(
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require("./assets/logo.jpeg")}
          />
          <Text style={styles.mainHeader}>Welcome to</Text>
          <Text style={[styles.mainHeader, {
            fontSize: 33,
            color: '#4c5dab',
            marginTop: 0,
          }]}>Mohit Technical</Text>
          <Text style={styles.paraStyle}>{description}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  mainContainer:{
    height: "100%",
    display:'flex',
    justifyContent:'space-between',
    paddingHorizontal:20,
    backgroundColor:'#fff',
    textAlign:'center',
  },

  homeTop:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  headerImage:{
    height:undefined,
    width:'100%',
    aspectRatio: 1,
    display:'flex',
    alignItems:'stretch',
    marginTop:50,
    borderRadius:20,
  },

  mainHeader:{
    fontSize:30,
    color:'#344055',
    textTransform:'uppercase'
  },

  paraStyle:{
    fontSize:19,
    textAlign:'left',
    color:'#7d7d7d',
    marginTop:30,
    paddingBottom:50,
    lineHeight:26
  }
})

