import { tv } from "tailwind-variants";

export const searchInput = tv({
  slots: {
    formContainer: "flex flex-col w-full mx-auto",
    formHeader: "flex justify-between items-center",
    formLabel: "font-nunito -text--base-subtitle font-bold",
    resultSpan: "font-nunito -text--base-span font-normal",
    formInput: "-bg--base-input border-solid border -border--base-border rounded-md -placeholder--base-label font-nunito font-normal -text--base-text",
  },
  variants: {
    screens: {
      mobile: {
        formContainer: "max-w-md gap-2",
        formLabel: "text-base",
        resultSpan: "text-xs",
        formInput: "px-3 py-2 text-sm"
      },
      desktop: {
        formContainer: "max-w-3.5xl gap-3",
        formLabel: "text-lg",
        resultSpan: "text-sm",
        formInput: "px-4 py-3 text-base"
      }
    }
  }
}, {responsiveVariants: ["sm", "md"]})