import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";


function TodoForm({onSubmit = null}) {

    // * define schema
    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });

    // * define form with useForm using yupResolver
    // ! old define form
    // const form = useForm({
    //     defaultValues: {
    //         title: '',
    //     },
    //     resolver: yupResolver(schema)
    // });

    const { handleSubmit, control, formState, register} = useForm({
        defaultValues: {
            title: '',
            description: '',
        },
        resolver: yupResolver(schema)
    });

    // * get errors or touchedFields etc ...
    const {errors, touchedFields} = formState;

    const myHandleSubmit = async (values) => {
        if(onSubmit)
            await console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(myHandleSubmit)}>
            <Controller
                name="title"
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
            {errors.title && <span>This is required.</span>}
            <br/>
            <Controller
                name="description"
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
            {errors.description && <span>This is my required.</span>}
            
            <br/>
            <input type="submit" />
        </form>
    );
}

export default TodoForm;