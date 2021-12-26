import { Tail } from '@/js-sdk/decorators/type';
import { restful } from '@/js-sdk/utils/http';
import Perm from '@/model/Perm';

export const list = (...args: Tail<Parameters<typeof restful.get>>) =>
  restful
    .get<Perm[]>('user-center/menu', ...args)
    .then((res) => ({ data: res.data?.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) }));
