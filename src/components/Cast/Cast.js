// actor
// character
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE, API_KEY } from 'services/api';
import defaultProfile from 'images/default-profile.jpg';
import s from 'components/Cast/Cast.module.css';

import List from 'components/List/List';

export default function Cast({ castArray }) {
  console.log('castArray', castArray);
  return (
    <List>
      {castArray.length > 0 ? (
        castArray.map(({ name, profile_path, id, character }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="200"
              />
            ) : (
              <div className={s.Cast__image}>
                <img src={defaultProfile} alt={name} width="200" />
              </div>
            )}

            <p>
              {name}, {character}
            </p>
          </li>
        ))
      ) : (
        <h2>No details on the cast</h2>
      )}
    </List>
  );
}

Cast.defaultProps = {
  poster_path: defaultProfile,
};
