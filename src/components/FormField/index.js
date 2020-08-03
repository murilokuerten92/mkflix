/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Input = styled.input`
background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &focus {
      border-bottom-color: var(--primary);
  }

  ${({ hasValue }) => hasValue && css`
    &:not([type='color']) + span {
    transform: scale(0.6) translateX(-10px); 
    }
  `}
`;

const Label = styled.label`

`;

Label.Text = styled.span`
 color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

// eslint-disable-next-line react/prop-types
export default function FormFiedl({
  // eslint-disable-next-line react/prop-types
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const IsTypeTextArea = type === 'textarea';
  const tag = IsTypeTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <FormFieldWrapper>

      <Label htmlFor={fieldId}>

        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>

    </FormFieldWrapper>
  );
}

FormFiedl.defaultProps = {
  type: 'text',
  value: '',
};

FormFiedl.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
