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

import * as React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

type Props = $ReadOnly<{|
  children: React.Node,
|}>;

type State = {|
  error: null | Error,
|};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {error: null};
  }

  componentDidCatch(error: Error) {
    this.setState({error});
  }

  _resetError = () => {
    this.setState({error: null});
  };

  render(): React.Node {
    if (this.state.error) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorMessage}>{this.state.error.message}</Text>
          <Button onPress={this._resetError} title="Reset" />
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorMessage: {
    fontSize: 18,
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 20,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
});
