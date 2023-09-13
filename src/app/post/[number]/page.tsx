import { octokit } from "@/octokit/octokit";
import { PostHeader } from "@/components/PostHeader";
import { postStyles } from "./postStyles";
import styles from "./post.module.css";

export default async function Post({ params }: { params: { number: string } }) {
  const issue = octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
    owner: "vercel",
    repo: "next.js",
    issue_number: parseFloat(params.number)
  });

  const HTML = octokit.request("POST /markdown", {
    text: (await issue).data.body ?? "",
  });

  const {
    main,
    postHeader,
    section
  } = postStyles({
    screens: {
      sm: "mobile",
      md: "desktop"
    }
  });

  return (
    <main className={main()}>
      <PostHeader
        className={postHeader()}
        headerInfos={(await issue).data}
      />

      <section
        className={`${section()} ${styles['tags-styles']}`}
        dangerouslySetInnerHTML={{ __html: (await HTML).data }}
      />
    </main>
  );
};