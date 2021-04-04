import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,

    label : PropTypes.string,
    disabled : PropTypes.bool,
};

function InputField(props) {

    const {form, name, label, disabled} = props;
    // const {errors} = form;
    // console.log(errors);
    // const hasError = errors[name];
    // let hasError = true;
    
    // if(errors)
    //     hasError = errors[name];
    // console.log(hasError);

    return (
        <Controller
            name={name}
            control={form.control}
            fullWidth
            label={label}
            
            render={({ field: { onChange, onBlur, value, name }}) => (
                <TextField 
                    name={name}
                    value={value}
                    disabled={disabled}
                    onChange={value => onChange(value)}
                    onBlur={onBlur}
                    // error={!!hasError}
                    // helperText="Lỗi rồi"
                />
            )}
        />
    );
}

export default InputField;