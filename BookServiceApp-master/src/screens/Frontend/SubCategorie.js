import { View, Text, Button, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from '../Styles/Style'
import { Avatar, Card, IconButton, Surface } from 'react-native-paper';
import styleclr from '../Styles/Styleclr';
export default function SubCategories({ navigation }) {
  return (
    <View style={styles.flexContainer}>
        <View>
          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styles.h3, styles.h, styleclr.primary]}>|</Text> All Categories</Text>
        </View>
        <ScrollView>
        <Surface style={[styles.radius, styles.Boxwhite]}>



          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flexcart, { marginBottom: 10 }]}>
            <View style={[styles.flexcart,]}>
              <Image source={require("../../assets/services/CarpetCleaning.png")} style={[styles.radius, { width: 100, height: 100, paddingVertical: 10 }]} />
              <View style={{ marginHorizontal: 10, justifyContent: "center" }}>
                <Text>Ac Chack-Up</Text>
                <Text style={[styles.p, { marginVertical: 10 }]}>Start From</Text>
                <View>
                  <Text style={[styleclr.primary]}>$ 190</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexCenter]}>

              <TouchableOpacity
                onPress={() => { navigation.navigate("ServiceDetail") }} >
                <Image source={require("../../assets/icon/rightarow.png")} style={[{ width: 40, height: 40, marginHorizontal: 10, }]} />
              </TouchableOpacity>
            </View>
          </View>
        </Surface>
    </ScrollView>
      </View>
  )
}