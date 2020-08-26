import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FormStyled = styled.form`
  & button {
    padding: 0.5rem 4rem;
    color: inherit;
    background: ${(props) =>
      props.theme.mode === 'dark' ? '#12111f' : '#dddddd'};
    border: none;
    border-radius: 1rem;
  }

  & i {
    margin-right: 1rem;
  }

  & > div {
    text-align: center;
  }

  & > input,
  & > textarea {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    background: inherit;
    color: inherit;
    border: ${(props) =>
      props.theme.mode === 'dark' ? '1px solid white' : '1px solid black'};

    &:focus {
      outline: none;
    }
  }
`;

function ContactForm() {
  const { t } = useTranslation();
  const [responseStatus, setResponseStatus] = useState('waiting');
  const formData = { accessKey: '0e0cfb67-b5bb-4d8a-acfb-a53a4a963f34' };

  const handleChange = (event) =>
    (formData[event.target.name] = event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await res.json();
      if (json.success) {
        setResponseStatus(true);
      } else {
        setResponseStatus(false);
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponseStatus(false);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name='name'
        placeholder={t('contactsForm name')}
        required
      />
      <input
        onChange={handleChange}
        name='email'
        type='email'
        placeholder={t('contactsForm email')}
        required
      />
      <textarea
        onChange={handleChange}
        name='message'
        style={{ resize: 'none' }}
        placeholder={t('contactsForm message')}
        rows='10'
        required
      />
      {responseStatus === 'waiting' ? (
        <div>
          <button name='sendButton'>{t('contactsForm button')}</button>
        </div>
      ) : (
        <div>
          <i className={responseStatus ? 'fas fa-check' : 'fas fa-times'}></i>
          <span>
            {responseStatus
              ? t('contactsForm response ok')
              : t('contactsForm response fail')}
          </span>
        </div>
      )}
    </FormStyled>
  );
}

export default ContactForm;
