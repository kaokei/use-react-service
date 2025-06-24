import { Inject, TokenType } from '@/index';
import { TYPES } from './types';

export class DemoService {
  public count = 1;

  public increaseCount() {
    this.count++;
  }

  @Inject(TYPES.route)
  public route!: TokenType<typeof TYPES.route>;

  @Inject(TYPES.router)
  public router!: TokenType<typeof TYPES.router>;
}
