import {
  declareRootProviders,
  useRootService,
  isReactive,
  isRef,
} from '@/index';

describe('App', () => {
  test('declareRootProviders and useRootService', async () => {
    const key1 = 'tokenKey1';
    const value1 = 'tokenValue1';

    const key2 = 'tokenKey2';
    const value2 = {
      name: 'zhangsan',
      age: 18,
    };

    declareRootProviders([
      {
        provide: key1,
        useValue: value1,
      },
      {
        provide: key2,
        useValue: value2,
      },
    ]);
    const service1 = useRootService(key1);
    const service2 = useRootService<typeof value2>(key2);

    expect(service1.value).toBe(value1);
    expect(isReactive(service1)).toBe(false);
    expect(isReactive(service1.value)).toBe(false);
    expect(isRef(service1)).toBe(true);
    expect(isRef(service1.value)).toBe(false);

    expect(service2).not.toBe(value2);
    expect(isReactive(service2)).toBe(true);
    expect(isRef(service2)).toBe(false);
    expect(service2.name).toBe(value2.name);
    expect(service2.age).toBe(value2.age);
  });
});
