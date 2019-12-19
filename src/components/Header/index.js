import React from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisH, FaTimes } from 'react-icons/fa';

import { Wrapper } from './styles';

const itensMenu = [
  { id: 1, title: 'Caixa de entrada', link: '/' },
  { id: 2, title: 'Nova Menssagem', link: '/newmenssage' },
];

const Header = () => {
  return (
    <Wrapper>
      <h2 className="logo">Challange</h2>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
        <FaEllipsisH />
      </label>

      <ul className="menu">
        {itensMenu.map(elem => (
          <Link key={elem.id} to={elem.link}>
            {elem.title}
          </Link>
        ))}

        <label htmlFor="chk" className="hide-menu-btn">
          <FaTimes />
        </label>
      </ul>
    </Wrapper>
  );
};

export default Header;
