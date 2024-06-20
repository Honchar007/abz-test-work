import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// store
import { useFetchPositionsQuery } from '../../store/positions.api';
import { useRegisterUserMutation } from '../../store/user.api';

// components
import StyledInput from '../StyledInput';
import StyledRadio from '../StyledRadio';
import Upload from '../Upload';
import StyledButton from '../StyledButton';
import Preloader from '../Preloader';

// styles
import './PostForm.scss';

// assets
import formSuccess from '../../assets/svgs/form-success.svg';

function PostForm({ changeCount, handleRefetch }) {
  const [isSubmit, setIsSubmit] = useState(false);

  const { data, isFetching } = useFetchPositionsQuery();
  const [registerUser, { error, isSuccess }] = useRegisterUserMutation();

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: 'Alice',
      email: 'randommail@gmai.com',
      phone: '+38054554545',
      position_id: 1,
    },
  });

  const onSubmit = async (data) => {
    const file = data.file[0];

    if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
      setError('file', {
        type: 'filetype',
        message: 'Only JPEG/JPG images are valid.',
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('file', {
        type: 'filesize',
        message: 'Image size must not exceed 5MB.',
      });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = async () => {
        if (img.width < 70 || img.height < 70) {
          setError('file', {
            type: 'dimensions',
            message: 'Minimum size of photo 70x70px',
          });
          return;
        }

        const tokenResponse = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/token`
        ).then((response) => response.json());

        if (tokenResponse && tokenResponse.token) {
          const token = tokenResponse.token;
          await registerUser({ ...data, photo: file, token });
          changeCount(6);
          await handleRefetch();
        }
      };
    };
  };

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'invalid',
        message: 'User with this phone or email already exist',
      });
      setError('phone', {
        type: 'invalid',
        message: 'User with this phone or email already exist',
      });
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) setIsSubmit(true);
  }, [isSuccess]);

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
                minLength: {
                  value: 2,
                  message: 'Username should contain 2-60 characters.',
                },
                maxLength: {
                  value: 20,
                  message: 'Username should contain 2-60 characters.',
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Only latin letters',
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
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
                  value: /^\+380\d{9}$/,
                  message:
                    'Phone number should start with code of Ukraine +380 and be followed by 9 digits.',
                },
              }}
            />
            <div className="form-radio-title">Select your position</div>
            <div className="form-radio-group">
              {isFetching ? (
                <Preloader />
              ) : (
                data &&
                data.positions &&
                data.positions.map((position) => (
                  <StyledRadio
                    value={position.id}
                    register={register}
                    validationSchema={{
                      required: 'Required',
                    }}
                    name="position_id"
                    watchValue={watch('position_id')}
                    key={position.id}
                  >
                    {position.name}
                  </StyledRadio>
                ))
              )}
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
