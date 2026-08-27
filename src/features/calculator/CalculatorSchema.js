import { z } from "zod";

export const calculatorSchema = z.object({
  number1: z
    .string()
    .min(1, "يرجى إدخال قيمة للرقم الأول")
    .regex(/^-?\d*\.?\d+$/, "يرجى إدخال أرقام صالحة للرقم الأول"),
  number2: z
    .string()
    .min(1, "يرجى إدخال قيمة للرقم الثاني")
    .regex(/^-?\d*\.?\d+$/, "يرجى إدخال أرقام صالحة للرقم الثاني"),
});