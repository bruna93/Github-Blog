import { tv } from "tailwind-variants";

export const postsListStyles = tv({
  slots: {
    postsSection: "flex flex-col gap-8 mx-auto w-full max-w-3.5xl justify-center items-center pb-24",
    postsContainer: "flex gap-8 flex-wrap justify-center",
    input: "mb-12",
    buttonsContainer: "flex w-full gap-6 max-w-xs h-fit mx-auto",
    buttonBase: "w-full hover:brightness-75 rounded-lg p-2 font-nunito text-base -text--base-title",
    buttonBack: "-bg--base-span",
    buttonNext: "-bg--base-label"
  }
})