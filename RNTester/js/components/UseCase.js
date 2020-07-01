/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = $ReadOnly<{|
  children?: React.Node,
  title?: ?string,
  description?: ?string,
  ios?: ?boolean,
  android?: ?boolean,
|}>;

export default function UseCase(props: Props) {
  const children = props.children.filter(child => child !== ' ');
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.note}</Text>
      {children}
    </View>
  );
}
