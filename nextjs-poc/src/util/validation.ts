import { PRODUCT_FORM_VALIDATION } from "@/constants/validation-errors";
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, PRODUCT_FORM_VALIDATION.PRODUCT_NAME_REQUIRED),
  price: z.coerce.number().positive(PRODUCT_FORM_VALIDATION.INVALID_PRICE),
  category: z.string().min(1, PRODUCT_FORM_VALIDATION.CATEGORY_REQUIRED),
  inStock: z.coerce.number().min(0,PRODUCT_FORM_VALIDATION.INVALID_STOCKS),
});

export type ProductFormValues = z.infer<typeof productSchema>;
