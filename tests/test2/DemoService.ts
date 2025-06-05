import { PostConstruct, computed } from '@/index';

export class DemoService {
  public msg = '';
  public count = 1;
  public age = 100;
  private _name = 'DemoService';
  public computedName: any;

  public setMsg(msg?: string) {
    this.msg = msg || '';
  }

  public increaseCount() {
    this.count++;
  }

  public increaseAge() {
    this.age++;
  }

  public get name() {
    return `${this.msg}-${this._name}-${this.age}`;
  }

  @PostConstruct()
  public init() {
    this.computedName = computed(() => {
      return `${this.msg}-${this._name}-${this.age}`;
    });
  }
}
