import React from 'react';
import { StyleSheet,FlatList, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    taskName : "",
    taskNames:  []
  };

  taskAddedHandler = () => {
    let taskNames = this.state.taskNames.slice();
    taskNames.push(this.state.taskName);
    this.setState({ taskNames: taskNames})
  }
  render() {
    return (
      <View>
        <View>

        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            value={this.state.taskName}
            onChangeText={val => {this.setState({taskName: val});}}
            placeholder= "Masukan Tugasmu"
            underlineColorAndroid="transparent"
          />
          <Button
            title="ADD"
            color="#00008b" //darkblue
            style={styles.addButton}
            onPress = {this.taskAddedHandler}
          />
        </View>
        <View>
          {this.state.taskNames.map(function(taskName){
            return <Text>{taskName}</Text>;
          })}
        {/* </View>
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> */}
         {/* <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    //alignItem: '',
    flexDirection: 'row'
    //justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 2
  },
  addButton: {
    flex: 2,
    alignItems: 'center'    
  }
});
