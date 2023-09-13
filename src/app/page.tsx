import { Profile } from "@/components/Profile";
import { homeStyles } from "./homeStyles";
import { PostsList } from "@/components/PostsList";
import { octokit } from "@/octokit/octokit";

export default async function Home() {
  const org = octokit.request("GET /orgs/{org}", {
    org: "vercel"
  });

  const { main, profile } = homeStyles({
    screens: {
      sm: 'mobile',
      md: 'desktop'
    }
  });

  return (
    <main className={main()}>
      <Profile
        className={profile()}
        org={(await org).data}
      />

      <PostsList />
    </main>
  );
};