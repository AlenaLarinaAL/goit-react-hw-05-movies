import { CastInfo } from 'components/CastInfo/CastInfo';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/Api';
import { List } from './Cast.styled';
import { Section } from 'components';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  return (
    <>
      <Section>
        <List>
          {cast.map(castinfo => (
            <CastInfo key={castinfo.id} {...castinfo} />
          ))}
        </List>
      </Section>
    </>
  );
};
