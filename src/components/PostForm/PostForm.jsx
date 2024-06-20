import { useState } from 'react';
import { useForm } from 'react-hook-form';

// components
import StyledInput from '../StyledInput';
import StyledRadio from '../StyledRadio';
import Upload from '../Upload';
import StyledButton from '../StyledButton';

// styles
import './PostForm.scss';

// assets
import formSuccess from '../../assets/svgs/form-success.svg';

function PostForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'all',
    defaultValues: {
      position: 'Frontend developer',
    },
  });

  const onSubmit = async (data) => {
    // need api integrate
    console.log('data');
    console.log(data);

    const file = data.file[0];

    if (!file.type.startsWith('image/')) {
      console.log('setError');
      setError('file', {
        type: 'filetype',
        message: 'Only images are valid.',
      });
      return;
    }

    setIsSubmit(true);
  };

  return (
    <>
      {!isSubmit ? (
        <div className="post-container">
          <h1 className="form-title">Working with POST request</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <StyledInput
              errors={errors}
              label="Your name"
              id="name"
              register={register}
              value={watch('name')}
              className="form-input"
              name="name"
              validationSchema={{
                required: 'Required',
                pattern: {
                  value: /^[a-zA-Zа-яА-ЯёЁєЄіїІЇґҐ']+$/,
                  message: 'Only letters',
                },
              }}
            />
            <StyledInput
              errors={errors}
              label="Email"
              id="email"
              className="form-input"
              register={register}
              value={watch('email')}
              name="email"
              validationSchema={{
                required: 'Required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email format',
                },
              }}
            />
            <StyledInput
              errors={errors}
              label="Phone"
              helperText="+38 (XXX) XXX - XX - XX"
              id="phone"
              className="form-input"
              register={register}
              value={watch('phone')}
              name="phone"
              validationSchema={{
                required: 'Required',
                pattern: {
                  value: /^\+?(?:[\d\s-()]){7,15}$/,
                  message: 'Invalid phone format',
                },
              }}
            />
            <div className="form-radio-title">Select your position</div>
            <div className="form-radio-group">
              <StyledRadio
                value="Frontend developer"
                register={register}
                name="position"
                watchValue={watch('position')}
              >
                Frontend developer
              </StyledRadio>
              <StyledRadio
                value="Backend developer"
                register={register}
                name="position"
                watchValue={watch('position')}
              >
                Backend developer
              </StyledRadio>
              <StyledRadio
                value="Designer"
                register={register}
                name="position"
                watchValue={watch('position')}
              >
                Designer
              </StyledRadio>
              <StyledRadio
                value="QA"
                register={register}
                name="position"
                watchValue={watch('position')}
              >
                QA
              </StyledRadio>
            </div>
            <Upload
              errors={errors}
              register={register}
              className="form-upload"
              name="file"
              value={watch('file')}
              validationSchema={{
                required: 'Required',
              }}
            />
            <StyledButton
              disabled={!isDirty || !isValid}
              type="submit"
              className="form-submit"
            >
              Sign up
            </StyledButton>
          </form>
        </div>
      ) : (
        <div className="post-container">
          <h1 className="form-title">User successfully registered</h1>
          <img src={formSuccess} />
        </div>
      )}
    </>
  );
}

export default PostForm;
