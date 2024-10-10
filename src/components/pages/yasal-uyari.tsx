import React from 'react';
import { Card, Typography } from 'antd';
import './home.css'

const { Title, Paragraph } = Typography;

const YasalUyari: React.FC = () => {
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
      <Title level={1}>Quilt Yasal Uyarı</Title>
      <Paragraph className='lead'>
      <strong>QUILT</strong> Minecraft sunucumuzda 5651 sayılı kanunun 8. maddesine ve T.C.K'nın 125. maddesine göre tüm
       oyuncularımız paylaştığı mesajlardan ve aldıkları kullanıcı adlarından kendileri sorumludur.
      </Paragraph>
      <Paragraph className='lead'>
      anarchyquilt@gmail.com e-posta'sından bize ulaşıldıktan en geç 3 (üç) gün içerisinde ilgili kanunlar ve yönetmenlikler
       çerçevesinde tarafımızca incelenerek, gereken işlemler yapılacak ve site yöneticilerimiz tarafından bilgi verilecektir.
      </Paragraph>
    </Card>
  );
};

export default YasalUyari;
