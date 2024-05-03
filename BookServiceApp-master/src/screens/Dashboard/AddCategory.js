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

const initialState = { category: "" }
const colorArr = ["#FDF2B3", "#D1EAED", "#FFDADA", "#FFD4A9", "#f5ebe0", "#b8dbd9", "#FDF2B3", "#b7e4c7"]
export default function AddCategory() {
  const { Categories } = useFetchDoc()
  const [loading, setisloading] = useState(false)
  const [state, setState] = useState(initialState)
  const [fileName, setfileName] = useState("Choose category icon")
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
    const { category } = state

    // category= category.trim()
    if (category.length < 3) {
      return notify("Category Err", "category minmum length 3", "error");
    }
    let formData = { category };
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

      await firestore().collection('categories').doc(formData.uid).set(formData);

      notify('Success', 'Category added successfully!', 'success');
      setisloading(false);
      setState(initialState);
      setfileName('');
      setfileSize('');
    } catch (error) {
      console.error('Error adding category:', error);
      notify('Error', 'Category not added!', 'error');
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
          placeholder='Enter Category Name'
          placeholderTextColor={"#D1D3D4"}
          value={state.category}
          onChangeText={value => handleChange("category", value)}
        />
        <View>
          {loading ?
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
            :
            <TouchableOpacity
              style={[styles.btnstylish, styles.shadowProp, { minWidth: "90%", alignItems: "center" }]}
              activeOpacity={0.5}
              onPress={handleSubmite}
            >
              <Text style={[styleclr.white]}>Add Category</Text>
            </TouchableOpacity>
          }
        </View>
        <ScrollView>
          <Surface style={{ margin: 10 }}>
            <CategoryTable itemsData={Categories} />
          </Surface>
        </ScrollView>
      </View>
    </ScrollView>
  )
}