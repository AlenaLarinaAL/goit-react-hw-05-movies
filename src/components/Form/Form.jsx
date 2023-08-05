import { useForm } from 'react-hook-form';
import { Button, FormStyled, Input } from './Form.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

export default function Form({ updateSearchQuery }) {
  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });

  const onSubmit = data => {
    updateSearchQuery(data);
    reset({ query: '' });
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        {...register('query', {
          required: 'Please enter your query',
        })}
      />
      <Button type="submit">
        <BiSearchAlt2 />
      </Button>
    </FormStyled>
  );
}
Form.propTypes = {
  updateSearchQuery: PropTypes.func.isRequired,
};
