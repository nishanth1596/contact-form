import { useForm } from "react-hook-form";
import InputItem from "./InputItem";
import toast from "react-hot-toast";
import tickImg from "../assets/icon-success-check.svg";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit() {
    reset();

    toast.custom(
      <div className="bg-Grey-900 rounded-xl p-6">
        <div className="flex items-center gap-1">
          <img src={tickImg} alt="Successful Icon" />
          <p className="text-White-fff text-lg leading-[1.5] font-bold">
            Message Sent!
          </p>
        </div>
        <p className="text-Green-200 mt-2 leading-[1.5] font-normal">
          Thanks for completing the form. We'll be in touch soon!
        </p>
      </div>,
    );
  }

  return (
    <article className="bg-White-fff w-full max-w-[46rem] rounded-2xl p-6 lg:p-10">
      <h2 className="text-[2rem] leading-[1] font-bold tracking-[-1px]">
        Contact Us
      </h2>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-4">
          <InputItem
            name="First Name"
            id="firstName"
            type="text"
            register={register}
            error={errors.firstName}
            rules={{
              required: "This field is required",
            }}
          />

          <InputItem
            name="Last Name"
            id="lastName"
            type="text"
            register={register}
            error={errors.lastName}
            rules={{
              required: "This field is required",
            }}
          />

          <InputItem
            name="Email Address"
            id="email"
            type="email"
            classNameProp="sm:col-span-2"
            register={register}
            error={errors.email}
            rules={{
              required: "Valid email address is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Please enter a valid email address",
              },
            }}
          />

          <InputItem
            name="Query Type"
            id="query"
            type="query"
            classNameProp="sm:col-span-2"
            register={register}
            error={errors.query}
          />

          <InputItem
            name="Message"
            id="message"
            type="text"
            classNameProp="sm:col-span-2"
            register={register}
            error={errors.message}
          />
        </div>

        <div className="mt-10 flex min-h-[51px] w-full items-center gap-3 pr-4">
          <input
            type="checkbox"
            id="consent"
            {...register("consent", {
              required:
                "To submit this form, please consent to being contacted",
            })}
          />
          <label htmlFor="consent" className="leading-[1.5] font-normal">
            I consent to being contacted by the team{" "}
            <span className="text-Green-600">*</span>
          </label>
        </div>
        {errors.consent && (
          <p className="text-Red-Errors leading-[1.5] font-normal">
            {errors.consent.message as string}
          </p>
        )}

        <button
          type="submit"
          className="bg-Green-600 text-White-fff mt-10 w-full cursor-pointer rounded-lg py-4 text-lg leading-[1.5] font-bold hover:bg-[#063f35]"
        >
          Submit
        </button>
      </form>
    </article>
  );
}

export default ContactForm;
