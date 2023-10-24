import React from 'react'
import { useForm } from "react-hook-form"

export const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className='container mx-auto py-5' onSubmit={handleSubmit(onFormSubmit)}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    {...register('email', { required: true, pattern: /\w+@\w+\.\w+/ })} />
                {errors?.email?.type == 'required' && <p className=''>This field is required</p>}
                {errors?.email?.type == 'pattern' && <p>You must enter valid email</p>}
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    {...register('password', { required: true, minLength: 8 })} />
                {errors?.password?.type == 'required' && <p className=''>This field is required</p>}
                {errors?.password?.type == 'minLength' && <p>Must be at least eight digits</p>}
            </div>
            <button type="submit" class="btn btn-primary">Log In</button>
        </form>
    )
}
