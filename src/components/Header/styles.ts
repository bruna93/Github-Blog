import { tv } from "tailwind-variants";

export const headerStyles = tv({
  slots: { 
    decoration01: "absolute object-contain", 
    decoration02: " absolute object-contain", 
    headerContainer: "w-full bg-gradient-to-b -from--base-background -to--base-border relative z-10", 
    headerContent: "mx-auto mr-auto w-full max-w-8.25 flex items-center justify-center", 
    image: "h-auto" 
  },
  variants: {
    screens: {
      mobile: {
        decoration01: 'bg-decoration01 w-[22.56rem] h-[8.75rem] left-0 bottom-7',
        decoration02: 'bg-decoration02 w-[20.18rem] h-[11.75rem] right-0 bottom-5',
        headerContent: "pt-12 pb-24",
        image: "w-28"
      },
      desktop: {
        decoration01: 'bg-decoration01 w-[25.56rem] h-[11.75rem] left-0 bottom-9',
        decoration02: 'bg-decoration02 w-[23.18rem] h-[14.75rem] right-0 bottom-7',
        headerContent: "pt-16 pb-[8.37rem]",
        image: "w-36"
      }
    }
  }
}, { responsiveVariants: ['sm', 'md'] });