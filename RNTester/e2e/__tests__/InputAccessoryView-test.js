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

  it('should be visiible on load', async () => {
    await expect(
      element(by.text('Simple view with sticky input')),
    ).toBeVisible();
  });
  it('should be visible after keyboard opens', async () => {
    const textInputID = 'input-accessory-text-input';
    await element(by.id(textInputID)).typeText('Test');
    await expect(
      element(by.text('Simple view with sticky input')),
    ).toBeVisible();
  });
  it('should be visible after send button press', async () => {
    await element(by.id('input-accessory-send-button')).tap();
    await element(by.text('OK')).tap();
    await expect(
      element(by.text('Simple view with sticky input')),
    ).toBeVisible();
  });
});
