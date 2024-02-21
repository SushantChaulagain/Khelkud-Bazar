"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import { useForm, FieldValues, SubmitHandler} from "react-hook-form";
import Button from "../components/button";
import { data } from "autoprefixer";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues:{
        email:"",
        password:"",
    }
  })

  const router = useRouter()

  const OnSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    signIn('credentials', {
      ...data,
      redirect: false
    }).then((callback) => {
      setIsLoading(false)
      if(callback?.ok){
        router.push('/cart');
        router.refresh();
        toast.success('Logged in successfully')
      }

      if(callback?.error){
        toast.error(callback.error)
      }
    })
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