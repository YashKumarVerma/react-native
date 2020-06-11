/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/* global device, element, by, expect, waitFor */
const {openExampleWithTitle} = require('../e2e-helpers');

describe('Alert', () => {
  beforeAll(async () => {
    await element(by.id('explorer_search')).replaceText('Alert');
    await element(by.label('Alert')).tap();
  });

  afterAll(async () => {
    await element(by.label('Back')).tap();
  });

  it('Alert with message and default button', async () => {
    const alertMessage =
      'Credibly reintermediate next-generation potentialities after goal-oriented ' +
      'catalysts for change. Dynamically revolutionize.';

    await openExampleWithTitle('Alerts');
    await element(by.id('alert-with-message-and-default-button')).tap();
    await expect(element(by.text(alertMessage))).toBeVisible();
    await element(by.text('OK')).tap();
  });

  it('Alert with three buttons', async () => {
    await openExampleWithTitle('Alerts');
    await element(by.id('alert-with-three-buttons')).tap();
    await expect(element(by.text('Alert Title'))).toBeVisible();
    await expect(element(by.text('Foo'))).toBeVisible();
    await expect(element(by.text('Bar'))).toBeVisible();
    await expect(element(by.text('Baz'))).toBeVisible();
    await element(by.text('Foo')).tap();
  });
});
