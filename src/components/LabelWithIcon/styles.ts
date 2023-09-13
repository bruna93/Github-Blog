import { tv } from "tailwind-variants";

export const labelWithIconStyles = tv({
  slots: {
    container: "w-fit flex h-fit gap-2 items-center",
    icon: "",
    text: "font-nunito font-semibold -text--base-subtitle"
  },
  variants: {
    screens: {
      mobile: {
        icon: "w-4 h-4",
        text: "text-sm"
      },
      desktop: {
        icon: "w-5 h-4",
        text: "text-base"
      }
    }
  }
}, { responsiveVariants: ['sm', 'md'] })