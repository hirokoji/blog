import {config, driver} from './config';

beforeAll(async () => {
  // アプリの起動処理
  await driver.init(config);
  // 起動時間の分スリープを入れる
  await driver.sleep(5000);
});

describe('e2e', () => {
  test('トップページが表示されること', async () => {
    // AccessibilityLabel="App"の要素を取得できるかどうかをテストしている
    expect(await driver.hasElementByAccessibilityId('App')).toBe(true);
  });
});
