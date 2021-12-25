import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ConfigProvider } from 'antd';

import zhCN from 'antd/es/locale/zh_CN';
import Menu from './component/Menu';

const queyClient = new QueryClient();

export default (props: PropsWithChildren<any>) => {
  return (
    <QueryClientProvider client={queyClient}>
      <ConfigProvider locale={zhCN}>
        <Menu />
        {props.children}
      </ConfigProvider>
    </QueryClientProvider>
  );
};
