"use client";

import { CONTACT_CONST } from "@/constants/app-constants";
import { CONTACT_SUBMIT_BUTTON_TEST_ID } from "@/constants/data-testid/contact";
import { useForm } from "react-hook-form";

export type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormType>();

  const onSubmit = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-2">
          {CONTACT_CONST.NAME_LABEL}
          <input
            type="text"
            className="border p-2 rounded w-full"
            {...register("name", {
              required: CONTACT_CONST.NAME_REQUIRED_VALIDATION_ERROR,
            })}
          />
        </label>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block mb-2">
          {CONTACT_CONST.EMAIL_LABEL}
          <input
            type="email"
            {...register("email", {
              required: CONTACT_CONST.EMAIL_REQUIRED_VALIDATION_ERROR,
              pattern: {
                value: CONTACT_CONST.EMAIL_VALIDATION_VALUE,
                message: CONTACT_CONST.EMAIL_INVALID_VALIDATION_ERROR,
              },
            })}
            className="border p-2 rounded w-full"
          />
        </label>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block mb-2">
          {CONTACT_CONST.MESSAGE_LABEL}
          <textarea
            {...register("message", {
              required: CONTACT_CONST.MESSAGE_REQUIRED_VALIDATION_ERROR,
            })}
            className="border p-2 rounded w-full"
            rows={4}
          />
        </label>
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        data-testid={CONTACT_SUBMIT_BUTTON_TEST_ID}
      >
        {CONTACT_CONST.SUBMIT_LABEL}
      </button>
      {isSubmitSuccessful && (
        <p className="text-green-600 mt-2">{CONTACT_CONST.MESSAGE_SENT}</p>
      )}
    </form>
  );
};
