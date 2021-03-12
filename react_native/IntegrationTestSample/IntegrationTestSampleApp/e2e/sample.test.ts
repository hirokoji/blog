import {config, driver} from './config';

beforeAll(async () => {
  // アプリの起動処理
  await driver.init(config);
  // 起動時間の分スリープを入れる
  await driver.sleep(5000);
});

describe('Card Component', () => {
  test('title should be json_server ', async () => {
    // given
    expect(await driver.hasElementByAccessibilityId('App')).toBe(true);

    // then
    expect(await driver.elementByAccessibilityId('card_title').text()).toBe(
      'json-server',
    );
  });

  test('author should be typicode', async () => {
    // given
    expect(await driver.hasElementByAccessibilityId('App')).toBe(true);

    // then
    expect(await driver.elementByAccessibilityId('card_author').text()).toBe(
      'by typicode',
    );
  });
});
