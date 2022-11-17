import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Component = props => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const onSubmit = () => {
    console.log({email, pwd});
  };
  return (
    <View>
      <Text>Email</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={email}
        onChangeText={v => setEmail(v)}
        keyboardType="email-address"
        key="email"
      />
      <Text>Password</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={pwd}
        onChangeText={v => setPwd(v)}
        secureTextEntry
        key="password"
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text style={{backgroundColor: 'pink'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
