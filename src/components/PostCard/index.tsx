import Link from "next/link";
import { Issue } from "@/octokit/octokit";
import { PostCardStyles } from "./styles";
import { dateFormatter } from "@/utils/formatter";

export type PostCardProps = {
  issue: {
    body: Issue['body'];
    created_at: Issue['created_at'];
    number: Issue['number'];
    title: Issue['title'];
  };
};

export const PostCard = ({
  issue
}: PostCardProps) => {
  const { created_at, title, body, number } = issue;

  const {
    cardContainer,
    cardDate,
    cardHeader,
    cardText,
    cardTitle
  } = PostCardStyles({
    screens: {
      sm: 'mobile',
      md: 'desktop'
    }
  });

  return (
    <Link
      className={cardContainer()}
      href={`/post/${number}`}
    >
      <div className={cardHeader()}>
        <h5 className={cardTitle()}>
          {title}
        </h5>

        <span className={cardDate()}>
          {dateFormatter.format(new Date(created_at))}
        </span>
      </div>

      <p className={cardText()}>
        {body ?? "..."}
      </p>
    </Link>
  );
};