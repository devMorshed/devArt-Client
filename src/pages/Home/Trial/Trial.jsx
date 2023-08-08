import { useForm } from "react-hook-form";
import BTN from "../../../components/Shared/BTN";

const Trial = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section className="p-10 bg-[url('https://i.ibb.co/PNPw1st/artwork.jpg')]">
      <div className="flex items-center justify-center">
        <div className="w-1/2 space-y-4">
          <p className="text-5xl font-bold text-gray-300">Sign Up Free</p>
          <p className="text-3xl text-gray-400">Enjoy a trial session</p>
        </div>

        <form
          className=" flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              className="p-2 rounded"
              placeholder="Your Name"
              {...register("fullName", { required: true })}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName?.type === "required" && (
              <p role="alert">Name is required</p>
            )}
          </div>
          <div>
            <input
              className="p-2 rounded"
              placeholder="Your Email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert">Valid Email Adress is required</p>
            )}
          </div>

          <BTN type="submit">Submit</BTN>
        </form>
      </div>
    </section>
  );
};

export default Trial;
