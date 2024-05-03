import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import Table from '../../components/Table'

export default function Notification() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Surface style={{ margin:10}}>
          <Table/>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  )
}