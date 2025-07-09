"use client";

import { ProductFormValues, productSchema } from "@/util/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { PRODUCT_FORM_CONST } from "@/constants/app-constants";
import { PRODUCT_FORM_SUBMIT_BUTTON_TEST_ID } from "@/constants/data-testid/product";
import { toast } from "sonner";

export default function ProductForm() {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      category: "",
      inStock: 0,
    },
  });

  function onSubmit() {
     toast(PRODUCT_FORM_CONST.PRODUCT_FORM_TOAST_SUCCESS);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto mt-14 p-4 border rounded-xl shadow"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{PRODUCT_FORM_CONST.PRODUCT_NAME_LABEL}</FormLabel>
              <FormControl>
                <Input
                  placeholder={PRODUCT_FORM_CONST.PRODUCT_NAME_PLACEHOLDER}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{PRODUCT_FORM_CONST.PRICE_LABEL}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder={PRODUCT_FORM_CONST.PRICE_PLACEHOLDER}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{PRODUCT_FORM_CONST.CATEGORY_LABEL}</FormLabel>
              <FormControl>
                <Input
                  placeholder={PRODUCT_FORM_CONST.CATEGORY_PLACEHOLDER}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inStock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{PRODUCT_FORM_CONST.IN_STOCK_LABEL}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder={PRODUCT_FORM_CONST.IN_STOCK_PLACEHOLDER}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" data-testid={PRODUCT_FORM_SUBMIT_BUTTON_TEST_ID}>{PRODUCT_FORM_CONST.SUBMIT_BUTTON_LABEL}</Button>
      </form>
    </Form>
  );
}
