import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";


function TodoForm({onSubmit = null}) {

    // * define schema
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title'),
    });

    // * define form with useForm using yupResolver
    // ! old define form
    // const form = useForm({
    //     defaultValues: {
    //         title: '',
    //     },
    //     resolver: yupResolver(schema)
    // });

    const { handleSubmit, control, formState} = useForm({
        defaultValues: {
            title: '',
            des: '',
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
                name="des"
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
            {errors.des && <span>This is required.</span>}
        </form>
    );
}

export default TodoForm;