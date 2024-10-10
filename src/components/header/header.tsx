import { CSSProperties } from 'react';
import { Layout, Space } from 'antd';
import '../../header.css';
import Logo from './logo';

const style: CSSProperties = {
  justifyContent: 'space-between',
  width: '100%',
  color: '#212529'
};

function Header() {
  return (
          <Layout.Header className="header">
            <Space style={style}>
              <Logo />
            </Space>
          </Layout.Header>
  );
}

export default Header;
