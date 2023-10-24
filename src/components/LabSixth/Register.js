import React from 'react'
import { useForm } from 'react-hook-form';
import Select from 'react-select'

export const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
    }

    const genders = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ]

    const hobbies = [
        { value: 'vollyBall', label: 'Volly Ball' },
        { value: 'footBall', label: 'Foot Ball' },
        { value: 'dodgeball', label: 'Dodge Ball' },
        { value: 'basketBall', label: 'Basket Ball' },
    ]

    return (
        <form className='container mx-auto py-5' onSubmit={handleSubmit(onFormSubmit)}>
            <div className="form-group">
                <label htmlFor="exampleInputUsername">Username</label>
                <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" placeholder="Enter Username"
                    {...register('username', { required: true, pattern: /\w+/ })} />
                {errors?.username?.type == 'required' && <p>This field is required</p>}
                {errors?.username?.type == 'pattern' && <p>Please enter a valid username</p>}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    {...register('email', { required: true, pattern: /\w+@\w+\.\w+/ })} />
                {errors?.email?.type == 'required' && <p>This field is required</p>}
                {errors?.email?.type == 'pattern' && <p>You must enter valid email</p>}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    {...register('password', { required: true, minLength: 8 })} />
                {errors?.password?.type == 'required' && <p>This field is required</p>}
                {errors?.password?.type == 'minLength' && <p>Must be at least eight digits</p>}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password"
                    {...register('confirmPassword', {
                        required: true, minLength: 8,
                        validate: (val) => {
                            if (watch('password') != val) {
                                return "Your passwords do no match";
                            }
                        }
                    })} />
                {errors?.confirmPassword?.type == 'required' && <p>This field is required</p>}
                {errors?.confirmPassword?.type == 'minLength' && <p>Must be at least eight digits</p>}
                {errors?.confirmPassword?.type == 'validate' && <p>Password doesn't match</p>}
            </div>
            <p>Gender</p>
            <Select options={genders} placeholder='Select Gender' />
            <p>Hobbies</p>
            <Select options={hobbies} placeholder='Select Hobbies' isMulti isSearchable />
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register('check', { required: true})} />
                <label className="form-check-label" htmlFor="exampleCheck1">Agree to terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    )
}
