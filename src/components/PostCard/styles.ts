import { tv } from "tailwind-variants";

export const PostCardStyles = tv({
  slots: {
    cardContainer: "flex flex-col w-full  rounded-xlg -bg--base-post cursor-pointer",
    cardHeader: "flex gap-6 justify-between",
    cardTitle: "font-nunito -text--base-title font-bold mt-[-0.3rem] text-ellipsis line-clamp-2",
    cardDate: "font-nunito -text--base-span font-normal flex-shrink-0",
    cardText: "font-nunito -text--base-text font-normal text-ellipsis line-clamp-4"
  },
  variants: {
    screens: {
      mobile: {
        cardContainer: 'gap-4 p-6 max-w-sm',
        cardTitle: 'text-base',
        cardDate: 'text-xs',
        cardText: 'text-sm'
      },
      desktop: {
        cardContainer: 'gap-5 p-8 max-w-[26rem]',
        cardTitle: 'text-xl',
        cardDate: 'text-sm',
        cardText: 'text-base'
      }
    }
  }
}, {responsiveVariants: ['sm', 'md']})