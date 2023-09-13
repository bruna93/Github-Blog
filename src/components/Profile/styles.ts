import { tv } from "tailwind-variants";

export const profileStyles = tv({
  slots: {
    profileContainer: "flex items-center gap-8 py-8 pr-8 pl-10 rounded-xlg -bg--base-profile shadow-3xl w-full mx-auto",
    profileContent: "flex flex-col w-full",
    profileAvatar: "flex-shrink-0 rounded-lg object-cover",
    profileHeader: "flex items-center justify-between gap-4 w-full mb-2",
    profileName: "font-nunito font-bold -text--base-title",
    profileLink: "font-nunito uppercase -text--brand-blue flex items-center gap-2 text-xs",
    profileDescription: "font-nunito -text--base-text font-normal mb-6",
    profileInfos: "flex"
  },
  variants: {
    screens: {
      mobile: {
        profileContainer: "flex-col max-w-md",
        profileName: "text-base",
        profileDescription: "text-sm",
        profileInfos: "flex-col items-start gap-4"
      },
      desktop: {
        profileContainer: "flex-row max-w-3.5xl",
        profileName: "text-2xl",
        profileDescription: "text-base",
        profileInfos: "flex-row items-center gap-6"
      }
    }
  }
}, { responsiveVariants: ['sm', 'md'] })