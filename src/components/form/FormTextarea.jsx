import FormError from './FormError';
import FormLabel from './FormLabel';
import FormTextareaField from './FormTextareaField';

/**
 * FormTextarea component.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - The label for the input field (optional).
 * @param {string} props.name - The name of the input field.
 * @param {Object} props.validations - The validation rules of react-hook-form (optional).
 * @param {string} props.className - The additional class names for styling (optional).
 * @param {any} props... - Additional props to be spread on the FormTextareaField component.
 * @returns {JSX.Element} - The rendered FormTextarea component.
 */
const FormTextarea = ({
  label,
  name,
  validations = {},
  className,
  ...props
}) => {
  return (
    <div>
      <FormLabel name={name} label={label} validations={validations} />

      <FormTextareaField
        className={className}
        validations={validations}
        name={name}
        {...props}
      />

      <FormError name={name} />
    </div>
  );
};

export default FormTextarea;
