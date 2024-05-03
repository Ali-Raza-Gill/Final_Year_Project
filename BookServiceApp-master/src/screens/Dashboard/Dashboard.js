import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import styles from '../Styles/Style'
import styleclr from '../Styles/Styleclr'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Dashboard() {
  return (
    <SafeAreaView>
      <Surface style={[styles.radius]}>
        <ScrollView>
          <View style={[styles.horizantlyCenter,styles.flexContainer, {marginVertical:10}]}>

            <Surface style={[styles.Box, styles.Box1, styles.radius ]} elevation={2}>
              
              <View >
                <Text style={[ styles.h2,styleclr.secondary]} > <Icon style={[ styles.h2]}name="user" /> Total Users</Text>
              </View>
              <View>
                <Surface style={[ styles.Box3, styles.radius,styles.horizantlyCenter,]}>
                  <Text style={[styles.h2, styleclr.secondary, styles.shadowProp,]} >234</Text>
                </Surface>
              </View>
            </Surface>
            <Surface style={[styles.Box, styles.Box2, styles.radius]} elevation={2}>
              
              <View >
                <Text style={[ styles.h2, styleclr.secondary1]} > <Icon style={[ styles.h2]}name="renren" />Total Orders</Text>
              </View>
              <View>
                <Surface style={[ styles.Box1, styles.radius,styles.horizantlyCenter,]}>
                  <Text style={[styles.h2, styleclr.secondary1, styles.shadowProp,]} >2564</Text>
                </Surface>
              </View>
            </Surface>
            <Surface style={[styles.Box, styles.Box3, styles.radius]} elevation={2}>
              
              <View >
                <Text style={[ styles.h2, styleclr.secondary2]} > <Icon style={[ styles.h2]}name="renren" />Total Services</Text>
              </View>
              <View>
                <Surface style={[ styles.Box2, styles.radius,styles.horizantlyCenter,]}>
                  <Text style={[styles.h2, styleclr.secondary2, styles.shadowProp,]} >24</Text>
                </Surface>
              </View>
            </Surface>
          
            

          </View>
        </ScrollView>
      </Surface>
    </SafeAreaView>
  )
}