import React from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisH, FaTimes } from 'react-icons/fa';

import { Wrapper } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <h2 className="logo">Challange</h2>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
        <FaEllipsisH />
      </label>

      <ul className="menu">
        <Link to="/">Caixa de entrada</Link>
        <Link to="/newmenssage">Nova menssagem</Link>
        <label htmlFor="chk" className="hide-menu-btn">
          <FaTimes />
        </label>
      </ul>
    </Wrapper>
  );
};

export default Header;
