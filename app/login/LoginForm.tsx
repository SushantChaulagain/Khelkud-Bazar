"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import { useForm, FieldValues, SubmitHandler} from "react-hook-form";
import Button from "../components/button";
import { data } from "autoprefixer";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues:{
        email:"",
        password:"",
    }
  })

  const OnSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    console.log(data)
  }

    return ( 
        <>
        <Heading title="Sign in to K-Bazar"/>
        <Button 
        outline
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
        />
        <hr className="bg-slate-300 w-full h-px"
        />
        <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required 
        />
        <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required 
        type="password"
        />
        <Button label ={isLoading ? "Loading" : 'Log in'} onClick={handleSubmit(OnSubmit)}/>
        <p className="text-sm">
            Don't have an account? 
            <Link href="/register" className="underline">
               Sign up
            </Link>
        </p>
        </>
     );
}
 
export default LoginForm;