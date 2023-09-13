import React from "react";
import { UseSearchObject } from "@/hooks/useSearch/useSearch";
import { searchInput } from "./styles";

type SearchInputProps = {
  className?: string;
  issuesCount: number;
  register: UseSearchObject['register'];
};

export const SearchInput = ({
  className,
  issuesCount,
  register
}: SearchInputProps) => {
  const {
    formContainer,
    formHeader,
    formInput,
    formLabel,
    resultSpan
  } = searchInput({
    screens: {
      sm: "mobile",
      md: "desktop"
    }
  });

  const id = React.useId();

  return (
    <form className={`${formContainer()} ${className}`}>
      <div className={formHeader()}>
        <label
          className={formLabel()}
          htmlFor={`${id}-search-input`}
        >
          Publicações
        </label>

        <span className={resultSpan()}>
          {`${issuesCount} publicações`}
        </span>
      </div>

      <input
        className={formInput()}
        id={`${id}-search-input`}
        placeholder="Buscar conteúdo"
        type="text"
        {...register("query")}
      />
    </form>
  );
};