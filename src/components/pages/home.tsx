import React from 'react';
import { Card, Button, Typography } from 'antd';
import './home.css'

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Card
      style={{
        padding: '4rem 2rem',
        margin: '2rem auto', // Center the card horizontally
        maxWidth: '800px', // Set a max width for better readability
        backgroundColor: '#e9ecef',
        borderRadius: '.3rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
      }}
      bordered={false}
    >
      <Title level={1}>Quilt</Title>
      <hr/>
      <Paragraph className='lead' style={{fontSize:'15px'}}>
      QuiltAnarchy sunucusu aktif. <strong>IP adresi:</strong> mc.quiltanarchy.xyz
      </Paragraph>
      <hr/>
      <Paragraph className='lead'>
        QuiltAnarchy, 07 Ocak 2024'den beri açık olan bir anarşi sunucusudur.
      </Paragraph>
      <Paragraph className='lead'>
        Yasal uyarıyı görmek için:
      </Paragraph>
      <Button type="primary" size="large" href="/yasal-uyari">
        Yasal Uyarı »
      </Button>
    </Card>
  );
};

export default Home;
