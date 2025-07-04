import {
  declareRootProviders,
  getRootService,
  isReactive,
  isRef,
  Token,
} from '@/index';

describe('App', () => {
  test('declareRootProviders and getRootService', async () => {
    const value1 = 'tokenValue1';
    const key1 = new Token<typeof value1>('tokenKey1');

    const value2 = {
      name: 'zhangsan',
      age: 18,
    };
    const key2 = new Token<typeof value2>('tokenKey2');

    declareRootProviders(con => {
      con.bind(key1).toConstantValue(value1);
      con.bind(key2).toConstantValue(value2);
    });

    const service1 = getRootService(key1);
    const service2 = getRootService(key2);

    expect(service1).toBe(value1);
    expect(isReactive(service1)).toBe(false);
    expect(isRef(service1)).toBe(false);

    expect(service2).not.toBe(value2);
    expect(isReactive(service2)).toBe(true);
    expect(isRef(service2)).toBe(false);
    expect(service2.name).toBe(value2.name);
    expect(service2.age).toBe(value2.age);
  });
});
