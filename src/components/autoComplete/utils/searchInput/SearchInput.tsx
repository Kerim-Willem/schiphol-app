import * as React from "react";
import { useEffect, useState } from "react";
import useDebounce from "hooks/useDenounce";

import styles from "./SearchInput.module.scss";

export interface ISearchProps {
  onChangeSearchQuery: (searchQuery: string) => void;
}

export default function SearchInput(props: ISearchProps) {
  const { onChangeSearchQuery } = props;
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  useEffect(() => {
    if (debouncedSearchQuery !== undefined) {
      onChangeSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onChangeSearchQuery]);

  return (
    <input
      id="search"
      type="search"
      placeholder="Search..."
      aria-label="Search"
      onChange={(event) => setSearchQuery(event.target.value)}
      className={styles.textarea}
    />
  );
}
