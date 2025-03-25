
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav>
        <ul className="navigation">
          {resources.map(resource => (
            <li key={resource.category}>
              <NavLink to={`/${resource.category.toLowerCase()}`} activeClassName="selected">{resource.category}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
