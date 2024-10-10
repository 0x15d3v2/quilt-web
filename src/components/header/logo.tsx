import { Link } from 'react-router-dom';
import logo from '../../../public/quilt.png';

function Logo() {
  return (
    <Link to="/">
      <div>
        <img
          style={{
            height: '100px', // Adjust this value to change the size
            position: 'fixed',
            top: '-20px',
            left: '20px',
            width: 'auto', // Keeps aspect ratio intact
          }}
          data-testid="logo"
          src={logo}
          alt="CobbleBot Logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
