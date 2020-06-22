/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';
import type {Node} from 'React';
import {NativeModules, Button, View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';

const {CrashyCrash} = NativeModules;

exports.displayName = (undefined: ?string);
exports.framework = 'React';
exports.title = 'Crash';
exports.description = 'Crash examples.';

const logs = [
  { 
    title: "Native Log Warnings",
    onPress : () => { 
      console.log("Call Native Warning");
    }
  },
  { 
    title: "Native Log Errors",
    onPress: () => { 
      console.log("Call Native Errors");
    }
  }
]

const Item = ({data}) => (
  <View>
    {/* <Button onPress={() => data.onPress} title={data.title}/> */}
    <Text onPress={data.onPress}>{data.title}</Text>
  </View>
);

exports.examples = [
  {
    title:'Logging',
    render(): Node { 
      return (
        logs.map(data => {
          return <Item key={data.title} data={data} />
        }
        )
      );
    }
  },
  {
    title: 'JS crash',
    render(): Node {
      return (
        <Button
          title="JS crash"
          onPress={() => {
            const a = {};
            const b = a.w.q; // js crash here
            console.log(b);
          }}
        />
      );
    },
  },
  {
    title: 'Native crash',
    render(): Node {
      return (
        <Button
          title="Native crash"
          onPress={() => {
            CrashyCrash.letsCrash();
          }}
        />
      );
    },
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});