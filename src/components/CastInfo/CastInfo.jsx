import { Img, Title, Subitle, LinkStyled, Item } from './CastInfo.styled';
import PropTypes from 'prop-types';

export const CastInfo = ({ id, src, name, character }) => {
  return (
    <>
      <Item key={id}>
        <LinkStyled>
          <Img src={src} alt={name} />
          <div>
            <Title>{name}</Title>
            <Subitle> {character}</Subitle>
          </div>
        </LinkStyled>
      </Item>
    </>
  );
};

CastInfo.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
