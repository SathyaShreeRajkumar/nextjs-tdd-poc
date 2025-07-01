"use client";

import { COMMON_CONST } from "@/constants/app-constants";
import { TRY_AGAIN_TEST_ID } from "@/constants/data-testid/error";

export type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ reset }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold">{COMMON_CONST.SOMETHING_WENT_WRONG}</h1>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        data-testid={TRY_AGAIN_TEST_ID}
      >
        {COMMON_CONST.TRY_AGAIN}
      </button>
    </div>
  );
}

