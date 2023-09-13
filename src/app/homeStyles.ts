import { tv } from "tailwind-variants";

export const homeStyles = tv({
  slots: {
    main: "px-6 pb-56 flex flex-col h-screen w-full",
    profile: "z-10 mb-[4.5rem]"
  },
  variants: {
    screens: {
      mobile: {
        profile: "mt-[-3.5rem]"
      },
      desktop: {
        profile: "mt-[-5.5rem]"
      }
    }
  }
}, { responsiveVariants: ["sm", "md"] })