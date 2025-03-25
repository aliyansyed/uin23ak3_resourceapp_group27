
import React from 'react';

function Content({ resource }) {
  return (
    <main id="container">
      <section id="content">
        <h1>{resource.category}</h1>
        <p>{resource.text}</p>
        <ul>
          {resource.sources.map((source, index) => (
            <li key={index}><a href={source.url}>{source.title}</a></li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Content;
