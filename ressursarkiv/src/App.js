import React, { useState } from 'react';
import resources from './ressurser.js';
import './css/main.css';

const App = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleClick = category => {
    setSelectedResource(resources.find(resource => resource.category === category));
  };

  return (
    <div>
       <header>
        <nav>
          {resources.map(({ category }, index) => (
            <a key={index} href="#" onClick={() => handleClick(category)} className="links">
              {category}
            </a>
          ))}
        </nav>
      </header>

      <div id="information">
        {selectedResource && (
          <>
            <h2>{selectedResource.category}</h2>
            <p>{selectedResource.text}</p>
            <ul>
              {selectedResource.sources.map((source, index) => (
                <li key={index}>
                  <a href={source.url}>{source.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
