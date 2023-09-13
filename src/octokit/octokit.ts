import { Endpoints } from "@octokit/types";
import { Octokit } from "octokit";

export type Issue = Endpoints["GET /search/issues"]["response"]["data"]["items"][number];

export type Org = Endpoints["GET /orgs/{org}"]["response"]["data"];

export const octokit = new Octokit({});