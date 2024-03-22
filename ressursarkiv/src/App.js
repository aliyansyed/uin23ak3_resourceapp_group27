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
      {/*Deler av denne koden er generert med bruk av ChatGPT, alt fra linje 5 til linje 22 er generert med ChatGPT*/}
    </div>
  );
};

export default App;
