import Link from "next/link";
import { LabelWithIcon } from "../LabelWithIcon";
import { postStyles } from "./styles"; import Image from "next/image";
import { Issue } from "@/octokit/octokit";
import { dateFormatter } from "@/utils/formatter";

type PostHeaderProps = {
  className?: string;
  headerInfos: Issue;
}

export const PostHeader = ({
  className,
  headerInfos
}: PostHeaderProps) => {
  const { title, number, user, created_at, comments } = headerInfos;

  const {
    link,
    postHeaderContainer,
    postHeaderLinks,
    postInfos,
    postTitle,
    customLabel
  } = postStyles({
    screens: {
      sm: "mobile",
      md: "desktop"
    }
  });

  return (
    <article className={`${postHeaderContainer()} ${className}`}>
      <div className={postHeaderLinks()}>
        <Link
          className={link()}
          href='/'
        >
          <Image
            alt="Seta esquerda"
            height={16}
            src='/back.svg'
            width={16}
          />

          voltar
        </Link>

        <Link
          className={link()}
          href={`https://github.com/vercel/next.js/issues/${number}`}
          target="_blank"
        >
          ver no github

          <Image
            alt="Icone de redirecionamento"
            height={16}
            src='/Icon.svg'
            width={16}
          />
        </Link>
      </div>

      <h3 className={postTitle()}>
        {title}
      </h3>

      <div className={postInfos()}>
        <LabelWithIcon
          customLabel={customLabel()}
          iconProps={{
            alt: 'Icone do github',
            src: '/github.svg'
          }}
          label={user?.login ?? "..."}
        />

        <LabelWithIcon
          customLabel={customLabel()}
          iconProps={{
            alt: 'Icone do calendário',
            src: '/calendar.svg'
          }}
          label={dateFormatter.format(new Date(created_at))}
        />

        <LabelWithIcon
          customLabel={customLabel()}
          iconProps={{
            alt: 'Icone de usuários',
            src: '/people.svg'
          }}
          label={`${comments} comentários`}
        />
      </div>
    </article>
  );
};