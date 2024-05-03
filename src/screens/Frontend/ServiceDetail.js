import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Serviceimg from '../../components/Serviceimg'
import styles from '../Styles/Style'
import styleclr from '../Styles/Styleclr'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SegmentedButtons, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFetchDoc } from '../../contaxts/FetchDoc'
import { Calendar } from 'react-native-calendars';
import { useAuthContaxt } from '../../contaxts/AuthContaxt';
import notify from '../../config/global';
const initialState = { detailFromUser: "" }
export default function ServiceDetail({ navigation }) {
  const route = useRoute();
  const { id } = route.params;

  const { user } = useAuthContaxt()
  const { workers } = useFetchDoc()
  const [state, setState] = useState(initialState);
  const [isloading, setisloading] = useState(false);
  const [value, setValue] = React.useState('');
  const [workerDetail, setWorkerDetail] = useState({})
  const [selected, setSelected] = useState({})
  const [ShowModal, setShowModal] = useState(false)
  const handleChange = (name, value) => {
    setState(s => ({ ...s, [name]: value }))
  }
  useEffect(() => {
    let tempworkers = workers
    let tempworker = tempworkers.filter((item) => {
      return (
        item.uid == id
      )
    })

    let uid = tempworker[0].uid;
    let bgColor = tempworker[0].bgColor;
    let category = tempworker[0].category;
    let city = tempworker[0].city;
    let description = tempworker[0].description;
    let location = tempworker[0].location;
    let price = tempworker[0].price;
    let serviceType = tempworker[0].serviceType;
    let workerName = tempworker[0].workerName;
    let imgUrl = tempworker[0].imgUrl;
    let whatsappNumber = tempworker[0].whatsappNumber;
    let data = { uid, bgColor, category, city, description, location, price, serviceType, workerName,imgUrl,whatsappNumber }
    setWorkerDetail(data)
  }, [])
  const handleDate = () => {
    setShowModal(false)
  }
  const handleSubmit = () => {
    const { bgColor, category, city, location, price, serviceType, workerName,whatsappNumber } = workerDetail
    const { dateString, day, month, timestamp, year } = selected
    const { address, email, phone, username, uid } = user
    const { detailFromUser } = state
    const propertyType = value
    const orderData = { bgColor, category, city, location, price, serviceType, workerName, dateString, day, month, timestamp, year, address, email, phone, username, uid, detailFromUser, propertyType ,whatsappNumber}
    orderData.id = Math.random().toString(36).slice(2)
    setisloading(true)
    createOrder(orderData)
  }
  const createOrder = async (orderData) => {
    try {
     
      await firestore().collection('orders').doc(orderData.id).set(orderData);

      notify('Success', 'order submit successfully!', 'success');
      setisloading(false);
      setState(initialState);
      setValue("")
      setSelected({})
    } catch (error) {
      
      notify('Error', 'order not submit!', 'error');
      setisloading(false);
    }
  };
  return (
    <ScrollView>
      <Serviceimg name={workerDetail.category} color={workerDetail.bgColor} url={workerDetail.imgUrl} />
      <View style={styles.flexContainer}>
        <View>
          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styleclr.primary]}>|</Text> Type of Properties</Text>
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
        <View>

          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styleclr.primary]}>|</Text> Type of service</Text>
          <Text style={{ marginHorizontal: 20, textAlign: "justify" }} >{workerDetail.serviceType}</Text>

          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styleclr.primary]}>|</Text> Price</Text>
          <Text style={{ marginHorizontal: 20, textAlign: "justify" }} >$ {workerDetail.price}</Text>
          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styleclr.primary]}>|</Text> City</Text>
          <Text style={{ marginHorizontal: 20, textAlign: "justify", fontWeight: "bold" }} >{workerDetail.city}</Text>
          <Text style={{ marginHorizontal: 30, textAlign: "justify" }} >{workerDetail.location}</Text>
          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styleclr.primary]}>|</Text> Description</Text>
          <Text style={{ marginHorizontal: 20, textAlign: "justify" }} >{workerDetail.description}</Text>

          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styleclr.primary]}>|</Text> Contact Us</Text>
          <Text style={{ marginHorizontal: 20, textAlign: "justify", fontWeight: "bold" }} > <Icon name="whatsapp" style={{ color: "#70e000" }} />  +923267876344</Text>
          <Text style={{ margin: 20, textAlign: "justify", fontWeight: "bold" }} > <Icon name="phone" style={{ color: "#000" }} />  +923267876344</Text>
          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styleclr.primary]}>|</Text> Service provider name</Text>
          <Text style={{ marginHorizontal: 20, textAlign: "justify", fontWeight: "bold" }} >{workerDetail.workerName}</Text>
        </View>
        <ScrollView>
          <Text style={[styles.h3, styles.h, { marginVertical: 10 }]} ><Text style={[styleclr.primary]}>|</Text> Add more details</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={state.detailFromUser}
            onChangeText={(value) => handleChange("detailFromUser", value)}
          />

        </ScrollView>

        <View style={styles.flexCenter}>
          <View><Text>{selected.dateString}</Text></View>

          {isloading ?
            <TouchableOpacity
              style={[styles.btnstylish, styles.shadowProp]}
              disabled={true}
            >
              <Text style={styles.textlight}>Loading...</Text>
            </TouchableOpacity>
            :
            <>
              <TouchableOpacity
                style={[styles.btn1, styles.shadowProp]}
                onPress={() => setShowModal(true)} >
                <Text style={styles.textlight}>Select Date</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnstylish, styles.shadowProp]}
                onPress={handleSubmit} >
                <Text style={styles.textlight}>Book Now</Text>
              </TouchableOpacity>
            </>
          }
        </View>
      </View>
      <Modal
        visible={ShowModal}
        animationType='fade'

      >
        <Calendar
          style={[styles.btn, styles.shadowProp]}
          onDayPress={date => setSelected(date)}
          markingType={'period'}
          markedDates={{
            [selected.dateString]: { selected: true, endingDay: true, color: 'orange', textColor: 'gray' },
            [selected.dateString]: { disabled: true, startingDay: true, color: 'orange', endingDay: true }
          }}

        />
        <TouchableOpacity style={[styles.btn, styles.shadowProp]}
          onPress={handleDate}
        >
          <Text style={{ textAlign: "center" }} >Ok</Text>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  )
}