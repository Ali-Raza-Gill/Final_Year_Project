import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../Styles/Style'
import { ScrollView } from 'react-native-gesture-handler'
import { Searchbar, Surface } from 'react-native-paper'
import styleclr from '../Styles/Styleclr'

export default function Categories({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView>
        <Surface style={[styles.CatBox4, { borderRadius: 40, margin:10 }] } elevation={2}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Surface>
      
      <Surface style={[styles.CategoryBox, styles.radius]} elevation={2}>
        <View>
          <Text style={[styles.h3, styles.h]} >| All Categories</Text>
        </View>

        <ScrollView >
          <View style={styles.flexrow}>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.CatBox1]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/ac.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>AC Repair</Text>
            </View>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.CatBox2]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/beauty.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>Beauty</Text>
            </View>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.CatBox3]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/appliance.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>Appliance</Text>
            </View>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.CatBox5]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/painting.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>Painting</Text>
            </View>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.Box1]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/cleaning.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>Cleaning</Text>
            </View>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.CatBox1]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/plumbing.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>Plumbing</Text>
            </View>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.Box2]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/Electronics.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>Electronics</Text>
            </View>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.CatBox6]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/Shifting.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>Shifting</Text>
            </View>
            <View style={[styles.flexCenter, { margin: 20 }]}>
              <TouchableOpacity style={[styles.catradius, styleclr.black, styles.CatBox5]} onPress={() => { navigation.navigate("SubCategorie") }}>
                <Image source={require("../../assets/categry/Salon.png")} />
              </TouchableOpacity>
              <Text style={styles.p}>Men's Salon</Text>
            </View>

          </View>
        </ScrollView>



      </Surface>

    </ScrollView>
  )
}