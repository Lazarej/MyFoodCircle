import Amies from '@/components/partages/amies';


import React, { useState } from 'react';
import { StyleSheet, useWindowDimensions, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

function Recommandation() {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <View style={style.view}>
        <View style={style.filterBar}>
        <View style={style.filterCont}>
          
            </View>
        </View>
  </View>
)
}




export default function PartagesView() {
const theme = useTheme();
  const style = styles(theme);
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'recommandations', title: 'Recommandations' },
    { key: 'amis', title: 'Amis' },
  ];
  

  const renderScene = SceneMap({
    recommandations: Recommandation,
    amis: Amies,
  });

  const renderTabBar = (props:any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary, height: 2 }}
      style={{ backgroundColor: theme.colors.surface, borderTopWidth:1, borderBottomWidth:1, borderColor: theme.colors.outline }}
    />
  );

  return (
    <TabView
    style={{ flex: 1 }}
    navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
  />
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
   

  view: {
    flex: 1,
    backgroundColor:theme.colors.surface
},

filterBar: {
    width: '100%',
    height: 60,
  paddingHorizontal: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
    
    borderBottomWidth: 1,
    borderColor:theme.colors.outline
  },

  filterCont: {
    flexDirection: 'row',
  }
 })

