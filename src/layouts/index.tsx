import React, { useState, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useLocation, useHistory } from 'react-router';

import { Menu, ConfigProvider, Drawer } from 'antd';
import { SelectInfo } from 'rc-menu/lib/interface';

import {
  UserOutlined,
  ClockCircleOutlined,
  ReadOutlined,
} from '@ant-design/icons';

import styled from 'styled-components';

import zhCN from 'antd/es/locale/zh_CN';

const queyClient = new QueryClient();

const Logo = styled.div`
  position: absolute;
  height: 48px;
  padding: 12px;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0 4px 4px 0;
  top: 8px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  img {
    height: 100%;
  }
`;

export default (props: PropsWithChildren<any>) => {
  const [visible, setvisible] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  const defaultSelectedKeys = [pathname?.split('/')?.[1]];

  function toggleVisible() {
    setvisible((b) => !b);
  }

  function onMenuChange({ key }: SelectInfo) {
    history.push(`/${key}`);
  }

  return (
    <QueryClientProvider client={queyClient}>
      <ConfigProvider locale={zhCN}>
        <Logo onClick={toggleVisible}>
          <img src={require('@/assets/img/ran.png')} alt="logo"></img>
        </Logo>
        <Drawer
          placement="left"
          visible={visible}
          onClose={toggleVisible}
          closable={false}
          bodyStyle={{ padding: 0 }}
        >
          <Menu
            mode="inline"
            onSelect={onMenuChange}
            defaultSelectedKeys={defaultSelectedKeys}
          >
            <Menu.Item key="user-center" icon={<UserOutlined />}>
              用户中心
            </Menu.Item>
            <Menu.Item key="time-mgt" icon={<ClockCircleOutlined />}>
              时间管理
            </Menu.Item>
            <Menu.Item key="flashcard" icon={<ReadOutlined />}>
              单词卡
            </Menu.Item>
          </Menu>
        </Drawer>

        {props.children}
      </ConfigProvider>
    </QueryClientProvider>
  );
};
