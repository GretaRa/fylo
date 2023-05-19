import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  
  return (
    <div className="rounded-md shadow-lg bg-primary-intro flex flex-col items-center gap-8 px-8 py-14 max-w-[90%] md:max-w-[60%] -mt-40 mx-auto">
      <h1 className="md:text-3xl text-xl font-bold text-center">Get early access today</h1>
      <p className="max-w-2xl text-center">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <div className="self-stretch ">
        <form className="flex lg:flex-row flex-col gap-4 xl:px-20 lg:px-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex-[2_2_0%]">
            <input className="text-black w-full min-w-max rounded-3xl px-8 py-3" placeholder="email@example.com" {...register("Email", {
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })} 
            aria-invalid={errors.Email ? "true" : "false"} />
            {errors.Email && <p className="text-accent-light-red pl-8" role="alert">Please enter a valid email address</p>}
          </div>
          <button className="min-w-max rounded-3xl lg:self-start bg-gradient-to-r from-accent-cyan to-accent-blue hover:to-accent-cyan px-8 py-3 font-special font-bold" type="submit">Get Started For Free</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;