import { signInAnonymously } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const login = () => {
  const [login, setLogin] = useState(false);

  const [loginGoogle, setLoginGoogle] = useState(false);
  const { signIn, signUp, loginWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  const handleGoogle = async (e: any) => {
    e.preventDefault();
    await loginWithGoogle();
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Firebase Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://www.itl.cat/pngfile/big/289-2898765_film-strip-wallpapers-background-image-for-movie-website.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      {/* Imagen logo de la pagina */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 "
      >
        <h1 className="text-4xl text-blue-700 font-semibold ">
          Register to view the application
        </h1>

        <div className="space-y-4 ">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px]  text-red-500">
                Please enter a valid Email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px]  text-red-500">
                Please enter a valid Password.
              </p>
            )}
          </label>
        </div>
        <div className="space-y-2">
          <button
            type="submit"
            className="w-full rounded bg-[#0970e5] py-3 font-semibold"
            onClick={() => setLogin(true)}
          >
            Sign In
          </button>
          <h6 className="text-2xl space-y-2 text-center text-blue-700">
            {" "}
            New User?{"  "}
          </h6>

          <button
            className="w-full rounded bg-[#0970e5] py-3 font-semibold"
            onClick={() => setLogin(false)}
          >
            Sign Up Now
          </button>
        </div>
      </form>
      <div className="relative mt-12 space-y-8 rounded bg-black/75 py-10 px-6  md:max-w-md md:px-14 ">
        <h1 className="text-4xl text-red-800 font-semibold ">
          Sign In with Google
        </h1>
        <button
          type="button"
          className=" w-full rounded bg-[#da1f12] py-3 font-semibold cursor-pointer"
          onClick={handleGoogle}
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default login;
