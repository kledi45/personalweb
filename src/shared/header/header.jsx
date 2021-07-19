import React, {useEffect} from 'react';
import './header.css';
import headerLinks from './headerLinks';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
        <header>
            <Link to = "/" className = "emri-a">
                <h1 className = "emri">Kledi Zeka</h1>
            </Link>
            <div className="middle">
            {headerLinks.map((l) => (
              <LinkCategory key={l.name} {...l} className = "active"/>
            ))}
            </div>
        </header>
        </>
    )
}

const LinkCategory = (props) => {
    return (
        <div className="links">
          {props.links.map((l) => {
            return (
              <Link key={l.to} to={l.to} className="active">
                {l.name}
              </Link>
            );
          })}
        </div>
    );
  };


export default Header;