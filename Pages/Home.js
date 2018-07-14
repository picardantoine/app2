import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class Home extends React.Component {
    render(){
        return(
            <View style={styles.page}>
                <View style={styles.welcomeContainer}>
                    <Text style= {styles.welcomeTitle}> Bienvenue </Text>
                </View>   
                <View style={styles.spacer}>
                    <View style={styles.container}>
                        <View style={styles.rectangle}>
                            <TextInput
                                placeholder="Entrez votre prénom"
                                returnKeyType="done"
                                blurOnSubmit={false}
                                style={styles.input}
                                underlineColorAndroid='transparent'
                            />
                        </View> 
                        <TouchableOpacity activeOpacity={0.7}>  
                            <View style={styles.button}>
                                <Text style={styles.buttonText}> Sign in </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>       
            </View>
        );
    }
}


const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeTitle: {
    color: "#49A698",
    fontSize: 30
  },
  spacer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  rectangle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F7F7',
    width: 170
  },
  input: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  button: {
      height: 50,
      width: 170,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6FA298',
      borderRadius: 15

  }
});

export default Home;