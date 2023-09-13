import { tv } from "tailwind-variants";

export const postStyles = tv({
  slots: {
    postHeaderContainer: "flex flex-col p-8 mx-auto w-full -bg--base-profile shadow-3xl rounded-xlg",
    postHeaderLinks: "flex justify-between mb-5",
    link: "font-nunito uppercase -text--brand-blue flex items-center gap-2 text-xs",
    postTitle: "font-nunito -text--base-title font-bold mb-2",
    postInfos: "flex",
    customLabel: "-text--base-span"
  },
  variants: {
    screens: {
      mobile: {
        postHeaderContainer: "max-w-md",
        postTitle: "text-lg",
        postInfos: "flex-col items-start gap-3"
      },
      desktop: {
        postHeaderContainer: "max-w-3.5xl",
        postTitle: "text-2xl",
        postInfos: "flex-row items-center gap-8"
      }
    }
  }
}, { responsiveVariants: ["sm", "md"] })