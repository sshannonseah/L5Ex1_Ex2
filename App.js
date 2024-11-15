// ===================== Ex1 =====================
// import React from 'react';
// import { View, FlatList, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
//
// const datasource = [
//   { key: 'a' },
//   { key: 'b' },
//   { key: 'c' },
//   { key: 'd' },
//   { key: 'e' },
//   { key: 'f' },
//   { key: 'g' },
//   { key: 'h' },
//   { key: 'i' },
//   { key: 'j' },
//   { key: 'k' },
//   { key: 'l' },
//   { key: 'm' },
//   { key: 'n' },
//   { key: 'o' },
//   { key: 'p' },
//   { key: 'q' },
//   { key: 'r' },
//   { key: 's' },
//   { key: 't' },
//   { key: 'u' },
//   { key: 'v' },
//   { key: 'w' },
//   { key: 'x' },
//   { key: 'y' },
//   { key: 'z' },
// ];
//
// const renderItem = ({ item }) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
// });
//
// const App = () => {
//   return (
//       <View style={{ flex: 1, padding: 20 }}>
//         <StatusBar hidden={true}/>
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.key}
//         />
//       </View>
//   );
// };
//
// export default App;

// ===================== Ex2 =====================
import React from 'react';
import {View,FlatList, Text, TouchableOpacity, StyleSheet, StatusBar, SectionList} from 'react-native';

const datasource = [
  {data:[
      {key: 'a'},
      {key: 'e'},
      {key: 'i'},
      {key: 'o'},
      {key: 'u'},
    ],
    title:"Vowels", bgColor:"skyblue"},
  {data:[
      {key: 'b'},
      {key: 'c'},
      {key: 'd'},
      {key: 'f'},
      {key: 'g'},
      {key: 'h'},
      {key: 'j'},
      {key: 'k'},
      {key: 'l'},
      {key: 'm'},
      {key: 'n'},
      {key: 'p'},
      {key: 'q'},
      {key: 'r'},
      {key: 's'},
      {key: 't'},
      {key: 'u'},
      {key: 'v'},
      {key: 'w'},
      {key: 'x'},
      {key: 'y'},
      {key: 'z'},
    ],
    title:"Consonants" , bgColor:"khaki"}
];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerText:{
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

const renderItem = ({item}) => {
  return (
      <TouchableOpacity
      style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{marginBottom:50, margin:10}}>
      <StatusBar hidden={true}/>
        <SectionList sections={datasource} renderItem={renderItem}
        renderSectionHeader={({section:{title,bgColor}}) => (
        <Text style={[styles.headerText,{backgroundColor:bgColor}]}>{title} </Text>
        )}/>
      </View>
  );
};

export default App;
