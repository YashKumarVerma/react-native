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
const {openComponentWithLabel} = require('../e2e-helpers');

describe('InputAccessoryView', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
    await openComponentWithLabel(
      '<InputAccessoryView>',
      '<InputAccessoryView> Example showing how to use an InputAccessoryView to build an iMessage-like sticky text input',
    );
  });

  it('Send button should show alert on press', async () => {
    await element(by.id('input-accessory-send-button')).tap();
    await expect(element(by.text('You tapped the button!'))).toBeVisible();
  });
});
