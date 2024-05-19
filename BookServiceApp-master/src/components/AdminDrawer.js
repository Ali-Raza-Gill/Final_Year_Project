import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { DrawerItemList, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Profile from '../screens/Frontend/Profile';
import Notification from '../screens/Frontend/Notification';
import { useAuthContaxt } from '../contaxts/AuthContaxt';
import styles from '../screens/Styles/Style';
import Dashboard from '../screens/Dashboard/Dashboard';
import AddCategory from '../screens/Dashboard/AddCategory';
import AddFlower from '../screens/Dashboard/AddWorker';
import auth from '@react-native-firebase/auth';
import notify from '../config/global';
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const { dispatch, user } = useAuthContaxt()
    const handleLogout = () => {
      auth()
      .signOut()
      .then(() => {
        dispatch({ type: "Logout" })
        notify("User Logout!", "", "success");
      });
    }
    return (
      <DrawerContentScrollView {...props}>
  
        <View style={{ marginVertical: 10 }}>
          <View style={[styles.flexaround,]}>
            <Image source={require("../assets/logo/Avater.png")} style={[styles.circle, { width: 60, height: 60 }]} />
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.h}>{user.username}</Text>
              <Text style={styles.p}>{user.email}</Text>
            </View>
          </View>
        </View>
  
  
        <DrawerItemList {...props} />
    
        <View style={{paddingHorizontal:15}}>
          <Button
            title="Logout"
            onPress={handleLogout}
          />
        </View>
      </DrawerContentScrollView>
  
    );
  }
export default function AdminDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      overlayColor: 'transparent',
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="AddCategory" component={AddCategory} />
    <Drawer.Screen name="AddFlower" component={AddFlower} />
    <Drawer.Screen name="Notification" component={Notification} />
    <Drawer.Screen name="Profile" component={Profile} />

  </Drawer.Navigator>
  )
}