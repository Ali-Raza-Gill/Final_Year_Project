import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Serviceimg from '../../components/Serviceimg'
import styles from '../Styles/Style'
import styleclr from '../Styles/Styleclr'
import { SegmentedButtons, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ServiceDetail({ navigation }) {
  const [value, setValue] = React.useState('');

  return (
    <ScrollView>
      <Serviceimg name="Ac Regular" />
      <View style={styles.flexContainer}>
        <View>
          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styles.h3, styles.h, styleclr.primary]}>|</Text> Type of Properties</Text>
        </View>
        <SafeAreaView style={styles.flexContainer}>
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'home',
                label: 'Home',
              },
              {
                value: 'office',
                label: 'Office',
              },
              { value: 'other', label: 'Other' },
            ]}
          />
        </SafeAreaView>
        <ScrollView>
          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styles.h3, styles.h, styleclr.primary]}>|</Text>Add Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
          />
        </ScrollView>
        <View style={{margin:20}}>
          <Button title='Select Date'/>
        </View>
        <View style={styles.flexCenter}>
          <TouchableOpacity
            style={[styles.btn1, styles.shadowProp1]}
            onPress={() => { navigation.navigate("Home") }} >
            <Text style={styles.textlight}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}