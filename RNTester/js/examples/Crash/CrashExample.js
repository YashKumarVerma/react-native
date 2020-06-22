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
import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const SECTIONS = [
  {
    title: 'Logging',
    examples: [
      {
        title: 'Console Warning',
        onPressHandler: () => {
          console.warn('Warning!!');
        },
      },
      {
        title: 'Console Error',
        onPressHandler: () => {
          console.error('Error!!');
        },
      },
      {
        title: 'React Warning',
        render: () => <ReactWarningExample key="react-warning-example" />,
        onPressHandler: () => {
          console.error('Errror!!');
        },
      },
    ],
  },
];

const ReactWarningExample = () => {
  const [showFruitList, setShowFruitList] = useState(false);

  const FruitListWithMissingKeys = () => (
    <View style={{display: 'none'}}>
      {['Apple', 'Banana'].map(fruit => (
        <Text>{fruit}</Text>
      ))}
    </View>
  );

  return (
    <View style={styles.itemContainer}>
      {showFruitList && <FruitListWithMissingKeys />}
      <Text
        style={styles.itemTitle}
        onPress={() => setShowFruitList(!showFruitList)}>
        React Warning
      </Text>
    </View>
  );
};

const SectionHeader = ({title}) => (
  <View>
    <Text style={styles.sectionHeader}>{title}</Text>
  </View>
);

const Item = ({item}) => {
  if (item.render) {
    return item.render();
  }
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle} onPress={item.onPressHandler}>
        {item.title}
      </Text>
    </View>
  );
};

const CrashExampleScreen = () => {
  return (
    <View>
      {SECTIONS.map(section => {
        return (
          <View key={section.title}>
            <SectionHeader title={section.title} />

            <View>
              {section.examples.map(item => (
                <Item key={item.title} item={item} />
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};

exports.framework = 'React';
exports.title = 'Crash';
exports.description = 'Crash examples.';
exports.examples = [
  {
    title: 'Crash Examples',
    render(): Node {
      return <CrashExampleScreen />;
    },
  },
];

const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 18,
  },
  sectionHeader: {
    fontSize: 24,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
});
