import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [articles, setArticles] = useState([
    // #0
    {
      // #1
      title: 'React vs Angular',
      desc: 'Qui gagnera la bataille ?',
      nbVotes: 0,
      id: 0,
    },
    {
      // #2
      title: 'React routing',
      desc: 'Créer des Single Page Application avec React',
      nbVotes: 0,
      id: 1,
    },
  ]);

  // En React, il est interdit de modifier un état précédent
  function increment(indexArticle) {
    //const newArticles = [...articles]; // #3 -> [#1, #2]
    //newArticles[indexArticle].nbVotes += 1; // MAUVAISE PRATIQUE
    const newArticles = articles.map((a, i) => {
      if (i === indexArticle) {
        return {
          ...a,
          nbVotes: a.nbVotes + 1,
        };
      }

      return a;
    });

    setArticles(newArticles);
  }

  function decrement(indexArticle) {
    const newArticles = articles.map((a, i) => {
      if (i === indexArticle && a.nbVotes > 0) {
        return {
          ...a,
          nbVotes: a.nbVotes - 1,
        };
      }

      return a;
    });

    setArticles(newArticles);
  }

  return (
    <div>
      {articles.map((a, i) => {
        return (
          <div key={a.id}>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <button onClick={() => increment(i)}>+</button>
            <span>{a.nbVotes}</span>
            <button onClick={() => decrement(i)}>-</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
