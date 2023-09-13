'use client';

import { useEffect } from "react";
import {
  useForm,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch
} from "react-hook-form";
import {
  Issue,
  octokit
} from "@/octokit/octokit";

type CalculateNumberOfPages = (arg0: {
  link?: string | undefined;
  setValue: UseSearchObject["setValue"];
}) => Promise<void>;

type ChangePage = (arg0: {
  setValue: UseSearchObject['setValue'];
  value: "next" | "prev";
  watch: UseSearchObject['watch'];
}) => Promise<void>;

type CheckAvailablePagination = (arg0: {
  setValue: UseSearchObject['setValue'];
  watch: UseSearchObject['watch'];
}) => Promise<void>;

type Form = {
  availablePagination: {
    next: boolean;
    prev: boolean;
  };
  issues: Issue[];
  page: {
    number: number;
  };
  pages: number;
  query: string;
  totalIssues: number;
};

type GETSearchIssuesType = (arg0: {
  setValue: UseSearchObject['setValue'];
  watch: UseSearchObject['watch'];
}) => Promise<void>;

export type UseSearch = () => UseSearchObject;

export type UseSearchObject = {
  changePage: ChangePage
  register: UseFormRegister<Form>;
  setValue: UseFormSetValue<Form>;
  watch: UseFormWatch<Form>;
};

export const useSearch: UseSearch = () => {
  const {
    register,
    setValue,
    watch
  } = useForm<Form>({
    defaultValues: {
      availablePagination: {
        next: false,
        prev: false
      },
      issues: [],
      page: { number: 1 },
      pages: 0,
      query: "",
      totalIssues: 0
    }
  });

  useEffect(() => {
    checkAvailablePagination({
      setValue: setValue,
      watch: watch
    });
  }, [watch("issues")]);

  useEffect(() => {
    GETSearchIssues({
      setValue: setValue,
      watch: watch
    });
  }, [watch("page")]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue("page", { number: 1 });
    }, 500);

    return () => clearTimeout(timeout);
  }, [watch("query")]);

  return {
    changePage,
    register,
    setValue,
    watch
  };
};

const calculateNumberOfPages: CalculateNumberOfPages = async ({
  link,
  setValue
}) => {
  if (link === undefined) return;

  const links = link.split(",");

  links.forEach((item) => {
    const exist = item.includes('rel="last');

    if (exist === true) {
      const URLString = item.
        split(";")[0].
        replace(/\s/g, "")
        .slice(1, -1);

      const url = new URL(URLString);
      const params = new URLSearchParams(url.search);
      const lastPage = params.get("page");

      setValue(
        "pages",
        lastPage === null ?
          0 :
          parseFloat(lastPage)
      );
    };
  });
};

const changePage: ChangePage = async ({
  setValue,
  value,
  watch
}) => {
  const current = watch("page.number");
  const total = watch("pages");

  switch (value) {
    case "next":
      if (current >= total) return;

      setValue("page", {
        number: current + 1
      });

      break;
    case "prev":
      if (current <= 1) return;

      setValue("page", {
        number: current - 1
      });

      break;
  };
};

const checkAvailablePagination: CheckAvailablePagination = async ({
  setValue,
  watch
}) => {
  const current = watch("page.number");
  const total = watch("pages");

  const dummy: Form['availablePagination'] = {
    next: false,
    prev: false
  };

  if (current >= 2) dummy.prev = true;
  else dummy.prev = false;

  if (current >= total) dummy.next = false;
  else dummy.next = true;

  setValue("availablePagination", dummy);
};

const GETSearchIssues: GETSearchIssuesType = async ({
  setValue,
  watch
}) => {
  const response = octokit.request("GET /search/issues", {
    page: watch("page").number,
    per_page: 20,
    q: `owner:vercel+repo:next.js+is:issue+${watch("query")} in:title,body`
  });

  setValue("issues", (await response).data.items);

  setValue("totalIssues", (await response).data.total_count);

  calculateNumberOfPages({
    link: (await response).headers.link,
    setValue: setValue
  });
};