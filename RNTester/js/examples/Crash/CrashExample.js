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
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import React, {useState, useCallback} from 'react';
import ErrorBoundary from './ErrorBoundary';

const SECTIONS = [
  {
    title: 'Logging',
    examples: [
      {
        title: 'Native Log Warning',
        onPressHandler: () => {
          //native module
        },
      },
      {
        title: 'Native Log Error',
        onPressHandler: () => {
          //native module
        },
      },
      {
        title: 'Native Log Fatal',
        onPressHandler: () => {
          //native module
        },
      },
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
        customRender: () => <ReactWarningExample key="react-warning-example" />,
      },
    ],
  },
  {
    title: 'Syntax Errors',
    examples: [
      {
        title: 'LogBox Syntax Error',
        onPressHandler: () => {
          const message = `TransformError SyntaxError: /path/to/RKJSModules/Apps/CrashReact/CrashReactApp.js: '${'im' +
            'port'} and 'export' may only appear at the top level (199:0)
      
        197 | });
        198 |
      > 199 | export default CrashReactApp;
            | ^
        200 |`;
          const syntaxError: ExtendedError = new Error(message);
          syntaxError.preventSymbolication = true;
          throw syntaxError;
        },
      },
      {
        title: 'Native Syntax Error',
        onPressHandler: () => {
          //RedBox Native Module
        },
      },
    ],
  },
  {
    title: 'JavaScript Errors',
    examples: [
      {
        title: 'Unhandled JavaScript Error',
        onPressHandler: () => {
          throw new Error('Unhandled JavaScript Error');
        },
      },
      {
        title: 'Throw JS Errror In Render',
        customRender: () => (
          <ReactErrorBoundaryExample key="react-error-boundary-example" />
        ),
      },
    ],
  },
  {
    title: 'Native Crashes',
    examples: [
      //Todo: Add various examples
      {
        title: 'Native Module Error',
        onPressHandler: () => {},
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

const ReactErrorBoundaryExample = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('App crashed in render!');
  }
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle} onPress={() => setThrowError(true)}>
        Throw JS Error In Render
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
  if (item.customRender) {
    return item.customRender();
  }
  return (
    <TouchableOpacity onPress={item.onPressHandler}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Settings = ({renderErrorBoundary, toggleErrorBoundary}) => (
  <View>
    <SectionHeader title="Settings" />
    <View style={styles.itemContainer}>
      <View style={styles.errorBoundarySwitch}>
        <Text style={styles.itemTitle} onPress={toggleErrorBoundary}>
          Use Error Boundary
        </Text>
        <Switch
          onValueChange={toggleErrorBoundary}
          value={renderErrorBoundary}
        />
      </View>
    </View>
  </View>
);

const ItemsList = () =>
  SECTIONS.map(section => {
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
  });

const CrashExampleScreen = () => {
  const [renderErrorBoundary, setRenderErrorBoundary] = useState(true);

  const toggleErrorBoundary = useCallback(() => {
    setRenderErrorBoundary(!renderErrorBoundary);
  }, [renderErrorBoundary]);

  const Container = renderErrorBoundary ? ErrorBoundary : View;

  return (
    <Container>
      <Settings
        renderErrorBoundary={renderErrorBoundary}
        toggleErrorBoundary={toggleErrorBoundary}
      />
      <ItemsList />
    </Container>
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
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
    backgroundColor: '#fff',
  },
  errorBoundarySwitch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
