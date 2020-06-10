/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @format
 */

/* global device, element, by, expect */
const {
  openComponentWithLabel,
  openExampleWithTitle,
} = require('../e2e-helpers');

describe('Pressable', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
    await openComponentWithLabel(
      '<Pressable>',
      '<Pressable> Component for making views pressable.',
    );
  });

  it('Console content should change on Press', async () => {
    await openExampleWithTitle('Change content based on Press');

    const consoleID = 'pressable_press_console';

    await element(by.text('Press Me')).tap();
    await expect(element(by.id(consoleID))).toHaveText('onPress');

    await element(by.text('Press Me')).tap();
    await expect(element(by.id(consoleID))).toHaveText('2x onPress');

    await element(by.text('Press Me')).tap();
    await expect(element(by.id(consoleID))).toHaveText('3x onPress');
  });

  it('Highlighted text should be pressable', async () => {
    await openExampleWithTitle('<Text onPress={fn}> with highlight');

    const buttonID = 'tappable_text';
    const consoleID = 'tappable_text_console';

    await element(by.id(buttonID)).tap();
    await expect(element(by.id(consoleID))).toHaveText('text onPress');

    await element(by.id(buttonID)).tap();
    await expect(element(by.id(consoleID))).toHaveText('2x text onPress');
  });

  it('Components with hitSlop prop extends touch area', async () => {
    await openExampleWithTitle('Pressable Hit Slop');

    const buttonID = 'pressable_hit_slop_extended_touch';
    const consoleID = 'pressable_hit_slop_console';

    await element(by.id(buttonID)).tap();
    await expect(element(by.id(consoleID))).toHaveText('onPress');

    await element(by.id(buttonID)).tap();
    await expect(element(by.id(consoleID))).toHaveText('2x onPress');
  });
});
