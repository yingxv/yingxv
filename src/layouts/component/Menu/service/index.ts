import { Tail } from '@/js-sdk/decorators/type';
import { restful } from '@/js-sdk/utils/http';

export const list = (...args: Tail<Parameters<typeof restful.get>>) =>
  restful.get('user-center/menu', ...args);
