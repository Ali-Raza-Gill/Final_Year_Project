import { View, Text, TextInput, TouchableOpacity, Button, Platform, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import styles from '../Styles/Style'
import styleclr from '../Styles/Styleclr'
import firestore from '@react-native-firebase/firestore';
import notify from '../../config/global'
import { ActivityIndicator, MD2Colors, Surface } from 'react-native-paper'
// import { storage, getStorage, ref, uploadBytes, getDownloadURL } from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';
import { ScrollView } from 'react-native-gesture-handler'
import { useFetchDoc } from '../../contaxts/FetchDoc'
import CategoryTable from '../../components/CategoryTable'

const initialState = {workerName:"", price:"",serviceType:"",mobileNumber:"",whatsappNumber:"",location:"",city:"",description:""}
const colorArr = ["#9b5de5", "#fee440", "#b5e48c", "#55a630", "#f5ebe0", "#e8eddf", "#cde5d7", "#ccdbfd"]
export default function AddWorker() {
  const { Categories } = useFetchDoc()
  const [loading, setisloading] = useState(false)
  const [state, setState] = useState(initialState)
  const [fileName, setfileName] = useState("Choose image")
  const [fileSize, setfileSize] = useState("")
  const [fileType, setfileType] = useState("")
  const [filePath, setfilePath] = useState("")
  // --------------- choice file
  const pickDocument = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Permission to access storage',
            message: 'We need your permission to access your storage',
            buttonPositive: 'OK',
          }
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage permission denied');
          return;
        }
      }

      const result = await DocumentPicker.pick({
        type: DocumentPicker.types.allFiles,
      });

      result.map(async (item) => {
        let path = item.uri;

        if (Platform.OS === 'android' && !path.startsWith('file://')) {
          path = `file://${path}`;

        }

        setfilePath(path);

        setfileType(item.type);
        let size = item.size / 1000;
        size = size.toFixed(2);
        setfileName(item.name);
        setfileSize(size + ' KB');
      });


    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.log('Error picking document:', err);
      }
    }
  };
  // ---------- add category
  const handleChange = (name, value) => {
    setState(s => ({ ...s, [name]: value }))
  }
  const handleSubmite = () => {
    const { workerName, price, serviceType, mobileNumber, whatsappNumber, location, city, description } = state

    if (!workerName) {
      return notify("Workername Err", "worker name minmum length 3", "error");
    }
    if (!price) {
      return notify("Price Err", "Add price ", "error");
    }
    if (!serviceType) {
      return notify("ServiceType Err", "serviceType name minmum length 3", "error");
    }
    if (!mobileNumber) {
      return notify("MobileNumber Err", "mobileNumber Correct Formate 923000000000", "error");
    }
    if (!whatsappNumber) {
      return notify("WhatsappNumber Err", "whatsappNumber Correct Formate 923000000000", "error");
    }
    if (!location) {
      return notify("Location Err", "location minmum length 3", "error");
    }
    if (!city) {
      return notify("City Err", "city name minmum length 3", "error");
    }
    if (!description) {
      return notify("Description Err", "description minmum length 3", "error");
    }
    // if (!category) {
    //   return notify("worker Err", "worker name minmum length 3", "error");
    // }
    let formData = { workerName, price, serviceType, mobileNumber, whatsappNumber, location, city, description };
    formData.uid = Math.random().toString(36).slice(2)
    formData.bgColor = colorArr[Math.floor(Math.random() * (7 + 1))]
    setisloading(true)
    createCategory(formData)

  }
  const createCategory = async (formData) => {
    try {
      // const parts = fileType.split('/');
      // const imageType = parts[1];
      // const pathToFile = filePath;
      // console.log("🚀 ~ createCategory ~ pathToFile:", pathToFile)
      // await storage().ref(fileName).putFile(pathToFile);



      // const downloadURL = await storageRef.getDownloadURL();

      // formData.imageUrl = downloadURL;

      await firestore().collection('workers').doc(formData.uid).set(formData);

      notify('Success', 'worker added successfully!', 'success');
      setisloading(false);
      setState(initialState);
      setfileName('');
      setfileSize('');
    } catch (error) {
      console.error('Error adding worker:', error);
      notify('Error', 'worker not added!', 'error');
      setisloading(false);
    }
  };

  return (
    <ScrollView>


      <View style={[styles.horizantlyCenter, styles.flexContainer, { backgroundColor: "#fff" }]}>
        <View style={[styles.horizantlyCenter, { width: "100%", marginTop: 20 }]}>
          <TouchableOpacity
            style={[styles.formControl, { padding: 15 }]}
            activeOpacity={0.5}
            onPress={pickDocument}
          >
            <Text >{fileName}</Text>
          </TouchableOpacity>
          <Text >{fileSize}</Text>

        </View>
        <TextInput
          style={styles.formControl}
          placeholder='Enter Name'
          placeholderTextColor={"#D1D3D4"}
          value={state.workerName}
          onChangeText={value => handleChange("workerName", value)}
        />
        <TextInput
          style={styles.formControl}
          placeholder='Enter Worker Price'
          placeholderTextColor={"#D1D3D4"}
          value={state.price}
          onChangeText={value => handleChange("price", value)}
        />
        <TextInput
          style={styles.formControl}
          placeholder='Enter Service Type'
          placeholderTextColor={"#D1D3D4"}
          value={state.serviceType}
          onChangeText={value => handleChange("serviceType", value)}
        />
        <TextInput
          style={styles.formControl}
          placeholder='Enter Mibile Number'
          placeholderTextColor={"#D1D3D4"}
          
          value={state.mobileNumber}
          onChangeText={value => handleChange("mobileNumber", value)}
        />
       
        <TextInput
          style={styles.formControl}
          placeholder='Enter whatsapp Number'
          placeholderTextColor={"#D1D3D4"}
          value={state.whatsappNumber}
          onChangeText={value => handleChange("whatsappNumber", value)}
        />
        <TextInput
          style={styles.formControl}
          placeholder='Enter Location'
          placeholderTextColor={"#D1D3D4"}
          value={state.location}
          onChangeText={value => handleChange("location", value)}
        />
        <TextInput
          style={styles.formControl}
          placeholder='Enter City'
          placeholderTextColor={"#D1D3D4"}
          value={state.city}
          onChangeText={value => handleChange("city", value)}
        />
        <View style={{width:"100%"}}>
          <View style={{display:"flex", alignItems:"center"}}>
            <TextInput
              style={styles.formControl}
              multiline={true}
              numberOfLines={6}
              placeholder='Enter Description'
              placeholderTextColor={"#D1D3D4"}
              value={state.description}
              onChangeText={value => handleChange("description", value)}
            />
          </View>
        </View>
        <View>
          {loading ?
            // <ActivityIndicator animating={true} color={MD2Colors.red800} />
            <TouchableOpacity
              style={[styles.btnstylish, styles.shadowProp, { minWidth: "90%", alignItems: "center" }]}
              activeOpacity={0.5}
              disabled={true}
            >
              <Text style={[styleclr.white]}>loading...</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={[styles.btnstylish, styles.shadowProp, { minWidth: "90%", alignItems: "center" }]}
              activeOpacity={0.5}
              onPress={handleSubmite}
            >
              <Text style={[styleclr.white]}>Add Worker</Text>
            </TouchableOpacity>
          }
        </View>
        <ScrollView>
          <Surface style={{ margin: 10 }}>
            {/* <CategoryTable itemsData={Categories} /> */}
          </Surface>
        </ScrollView>
      </View>
    </ScrollView>
  )
}