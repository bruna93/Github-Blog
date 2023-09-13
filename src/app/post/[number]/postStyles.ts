import { tv } from "tailwind-variants";

export const postStyles = tv({
  slots: {
    main: "px-6 pb-56 flex flex-col h-screen w-full",
    postHeader: "z-10 mb-[4.5rem]",
    section: "w-full max-w-3.5xl mx-auto flex flex-col gap-4"
  },
  variants: {
    screens: {
      mobile: {
        postHeader: "mt-[-3.5rem]"
      },
      desktop: {
        postHeader: "mt-[-5.5rem]"
      }
    }
  }
}, { responsiveVariants: ["sm", "md"] })