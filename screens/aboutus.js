import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Button from './Button';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Home( { navigation } ) {

    alertMessage = () => {
        alert("RATED");
    }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.Title}>About Us</Text>
        <Text style={styles.Text}>Our priority is to deliver a app that identify timber effectively 
        Our team working on different fields to ensure user to have a good user expirience.</Text>

        <Text style={styles.TeamHeading}>Our Team</Text>
        <Text style={styles.Team}>Dinu Senal Sendanayake</Text>
        <Text style={styles.Work}>Work : Datascience | Backend | UI </Text>
        <Text style={styles.Team}>Shazni</Text>
        <Text style={styles.Work}>Work : Backend | Server Side | UI </Text>
        <Text style={styles.Team}>Kavindu Randimal</Text>
        <Text style={styles.Work}>Work : Login System - UI </Text>
        <Text style={styles.Team}>Suhan Suraweera</Text>
        <Text style={styles.Work}>Work : About Us | Rating - UI </Text>
        <Text style={styles.Team}>Navoda Perera</Text>
        <Text style={styles.Work}>Work : Details | Feedback - UI </Text>
        
        
        <Text style={styles.ContactHeading}>Contanct Us</Text>
        <Text style={styles.Contact}>Email | TimberTracker@gmail.com</Text>
        
        <Stars
            rating={2.5}
            count={5}
            half={true}
            starSize={50}
            fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
        />

        <Button text="RATE" onPress={this.alertMessage} />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    textAlign:'center', 
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 50,
    textTransform: 'uppercase',
    color: '#47DFC2',
  },
  Text: {
    textAlign:'center', 
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
  TeamHeading: {
    textAlign:'center', 
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 35,
    textTransform: 'uppercase',
    color: '#47DFC2',
  },
  Team: {
    textAlign:'center', 
    fontWeight: 'bold',
    fontSize: 15,
    paddingVertical: 5,
    textTransform: 'uppercase',
    color: '#fff',
  },
  Work: {
    textAlign:'center', 
    fontStyle:'normal',
    fontSize: 15,
    color: '#fff',
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    color: '#47DFC2'
  },
  ContactHeading: {
    textAlign:'center', 
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 35,
    textTransform: 'uppercase',
    color: '#47DFC2'
  },
  Contact: {
    textAlign:'center', 
    fontWeight: 'bold',
    marginBottom: 25,
    fontSize: 15,
    paddingVertical: 5,
    textTransform: 'uppercase',
    color: '#fff',
  },
  myStarStyle: {
    color: '#47DFC2',
    width:20,
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width:50, height:50},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
});
