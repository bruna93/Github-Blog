'use client';

import { PostCard } from "@/components/PostCard";
import { SearchInput } from "@/components/SearchInput";
import { useSearch } from "@/hooks/useSearch/useSearch";
import { postsListStyles } from "./styles";

export const PostsList = () => {
  const { 
    postsSection, 
    input, 
    postsContainer,
    buttonBase,
    buttonsContainer,
    buttonBack,
    buttonNext
  } = postsListStyles();

  const {
    changePage,
    register,
    setValue,
    watch
  } = useSearch();

  return (
    <section className={postsSection()}>
      <SearchInput
        className={input()}
        issuesCount={watch("totalIssues")}
        register={register}
      />

      <div className={postsContainer()}>
        {watch("issues").map(({
          body,
          created_at,
          id,
          number,
          title
        }) => (
          <PostCard
            key={id}
            issue={{
              body: body,
              created_at: created_at,
              number: number,
              title: title
            }}
          />
        ))}

        <div className={buttonsContainer()}>
          <button
            onClick={() => changePage({
              setValue: setValue,
              value: "prev",
              watch: watch
            })}
            className={`${buttonBase()} ${buttonBack()}`}
          >
            Prev
          </button>

          <button
            onClick={() => changePage({
              setValue: setValue,
              value: "next",
              watch: watch
            })}
            className={`${buttonBase()} ${buttonNext()}`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};