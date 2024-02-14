"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import { useForm, FieldValues, SubmitHandler} from "react-hook-form";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues:{
        name:"",
        email:"",
        password:"",
    }
  })

    return ( 
        <>
        <Heading title="Sign up for K-Bazar"/>
        <hr className="bg-slate-300 w-full h-px"/>
        <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        
        />
        </>

     );
}
 
export default RegisterForm;