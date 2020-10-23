import React from 'react';
import "../styles/Registration.css"
import { useForm } from "react-hook-form";


export default function Registration(){

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values: any) => console.log(values);

    return (
        <div className="registration">
            <h1>Sign Up</h1>
            <h5>FILL OUT A SIMPLE REGISTRATION FORM AND BECOME A</h5>
            <h5>MEMBER OF THE CLUB LICHI</h5>

            <div id="container">
                <p>Email:</p><br/><br/>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="email"
                        ref={register({
                            required: "Required!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address!"
                            }
                        })}
                    /><br/>

                    <div className="check">
                        {errors.email && errors.email.message}
                    </div>

                    <p>Password:</p><br/><br/>
                    <input
                        type="password"
                        name="password"
                        ref={register({
                            required: "Required!",
                            validate: value => value !== "123" || "To easy!"
                        })}
                    />

                    <div className="check">
                        {errors.password && errors.password.message}
                    </div>

                    <p id="inf">
                        <input
                            type="checkbox" />
                        I allow Lichi to use my personal data in accordance<br/>
                        with confidential by agreement.
                    </p>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
