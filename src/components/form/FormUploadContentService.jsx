import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import PageError from '../layout/PageError';
import LoadingSpinner from '../ui/LoadingSpinner';
import ImagePreview from '../upload/ImagePreview';
import PDFPreview from '../upload/PDFPreview';
import FormError from './FormError';
import FormFileUploadByDrag from './FormFileUploadByDrag';
import FormLabel from './FormLabel';

const FormUploadContentService = ({
  name,
  label,
  restServiceHook,
  restData = {},
  type = 'image',
  ...props
}) => {
  const { setValue, setError } = useFormContext();
  const formInput = useWatch({ name: name });

  useEffect(() => {
    if (typeof formInput === 'object') {
      setValue(name, null);
    }
  }, [formInput, name, setValue]);

  if (!restServiceHook)
    return <PageError message='Please provide content upload service hook' />;

  const { isLoading, mutate } = restServiceHook();

  const uploadToContentServer = (file) => {
    const data = {
      ...restData,
      file: file,
    };
    mutate(data, {
      onSuccess: (response) => {
        setValue(name, response.data);
      },
      onError: (error) => {
        setError(name, {
          type: 'fromAPI',
          message: error.message,
        });
      },
    });
  };

  if (isLoading) return <LoadingSpinner message='Uploading File' />;

  return (
    <div>
      <FormLabel label={label} validations={props.validations} />
      {!formInput && (
        <FormFileUploadByDrag
          name={name}
          type={type}
          noDefaultPlaceholder
          onChange={uploadToContentServer}
          {...props}
        />
      )}
      {formInput && type === 'image' && (
        <ImagePreview
          url={formInput}
          onRemove={() => setValue(name, '')}
          {...props}
        />
      )}
      {formInput && type === 'pdf' && (
        <PDFPreview
          url={formInput}
          onRemove={() => setValue(name, '')}
          {...props}
        />
      )}
      <FormError name={name} />
    </div>
  );
};

export default FormUploadContentService;
