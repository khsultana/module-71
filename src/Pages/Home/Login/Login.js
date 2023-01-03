import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
                minLength: { value: 6, message: "password must 6 Character" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="password-error" role="alert">
                {errors.password?.message}
              </p>
            )}

            <span className="label-text mt-3 mb-4">Forget Password</span>
          </div>

          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p className="mt-4">
          New To Doctors Portal{" "}
          <Link className="text-secondary" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
