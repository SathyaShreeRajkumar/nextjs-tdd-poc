import { ErrorPageProps } from "@/app/error";

export const mockErrorPageProps: ErrorPageProps = {
    error: new Error(),
    reset: jest.fn()
};