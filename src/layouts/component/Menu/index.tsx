import { Menu, Drawer, Avatar, Typography } from 'antd';
import * as icons from '@ant-design/icons';
import type { DrawerProps } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { list } from './service';
import Perm from '@/model/Perm';
import { useState, createElement } from 'react';
import styles from './index.less';
import prem2Tree from './util/perm2Tree';

const { Item, SubMenu } = Menu;
export default () => {
  const [drawer, setDrawer] = useState<DrawerProps>({
    closable: true,
    closeIcon: null,
    bodyStyle: { padding: 0 },
    onClose: () => setDrawer((pre) => ({ ...pre, visible: false })),
    placement: 'left',
  });

  const history = useHistory(),
    { pathname } = history.location;

  const menu = useQuery<{ data: Perm[] }>('menu-list', () => list(), {
    refetchOnWindowFocus: false,
  });

  const trigger = () => {
    setDrawer((pre) => ({ ...pre, visible: !pre.visible }));
  };

  const renderMenu = (subMen = prem2Tree(menu?.data?.data?.filter((m) => !m.isHide && m.isMenu))) =>
    subMen.map(({ children, url, name, icon }) =>
      children?.length ? (
        <SubMenu icon={icon && createElement((icons as any)[icon])} title={name} key={url}>
          {renderMenu(children)}
        </SubMenu>
      ) : (
        <Item key={url} title={name} icon={icon && createElement((icons as any)[icon])}>
          <Link to={url} onClick={trigger}>
            {name}
          </Link>
        </Item>
      ),
    );

  return (
    <>
      <Drawer {...drawer}>
        <div className={styles.logo} />

        <Menu mode="inline" selectedKeys={[pathname]}>
          {renderMenu()}
        </Menu>
      </Drawer>
      <div
        className={[styles.icon, drawer.visible && styles['icon-open']]?.join(' ')}
        onClick={trigger}
      >
        <Avatar className={styles.avatar} shape="square" src={require('@/assets/img/ran.png')} />
      </div>
    </>
  );
};
