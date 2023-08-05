import { Item, Title, Text } from './ReviewsItem.styled';
import PropTypes from 'prop-types';

export const ReviewItem = ({ content, author }) => {
  return (
    <>
      <Item>
        <Title>{author}</Title>
        <Text>{content}</Text>
      </Item>
    </>
  );
};

ReviewItem.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
