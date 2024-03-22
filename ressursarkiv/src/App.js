import React, { useState } from 'react';
import resources from './ressurser.js';

const App = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleClick = category => {
    setSelectedResource(resources.find(resource => resource.category === category));
  };

  return (
    <div>
      <nav>
        <ul className="navigation">
          {resources.map(({ category }, index) => (
            <li key={index} onClick={() => handleClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </nav>

      {selectedResource && (
        <div id="content">
          <h1>{selectedResource.category}</h1>
          <p>{selectedResource.text}</p>
          <ul>
            {selectedResource.sources.map((source, index) => (
              <li key={index}>
                <a href={source.url}>{source.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
