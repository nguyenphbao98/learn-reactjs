import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputComponent.propTypes = {
    
};

function InputComponent(props) {

    const {title,error,control} = props;

    return (
        <>
            <Controller
                name={title}
                render={({ field: { onChange, onBlur, value, name }}) => (
                    <TextField 
                        name={name}
                        value={value}
                        onChange={value => onChange(value)}
                        onBlur={onBlur}
                    />
                )}
                control={control}
            />
            {error && <span>This is required.</span>}
        </>
    );
}

export default InputComponent;