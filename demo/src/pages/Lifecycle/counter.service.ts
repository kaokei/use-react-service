import { Injectable, autobind } from '../../../../src';

@Injectable()
export class CounterService {
  count = 1;

  @autobind
  add() {
    console.log('start add inside CounterService :>> ', this.count);
    this.count++;
    console.log('end add inside CounterService :>> ', this.count);
  }
}
