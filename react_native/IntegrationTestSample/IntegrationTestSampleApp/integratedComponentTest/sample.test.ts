import {config, driver} from './config';

beforeAll(async () => {
  // アプリの起動処理
  await driver.init(config);
  // 起動時間の分スリープを入れる
  await driver.sleep(5000);
});

describe('Integrated Component Test', () => {
  describe('Card Component', () => {
    beforeAll(async () => {
      // Given: card component is available
      expect(await driver.hasElementByAccessibilityId('card')).toBe(true);
    });

    test('title should be json_server ', async () => {
      // Then
      expect(await driver.elementByAccessibilityId('card_title').text()).toBe(
        'json-server',
      );
    });

    test('author should be typicode', async () => {
      // Then
      expect(await driver.elementByAccessibilityId('card_author').text()).toBe(
        'by typicode',
      );
    });
  });
});
