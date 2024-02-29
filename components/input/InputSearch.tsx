"use client";
import { useCallback, useState } from "react";
import InputText from "./InputText";
import { INPUT_TIME_DELAY } from "@/const/app.const";
import _ from "lodash";
type IInputSearch = {
  defaultKeyword?: string;
  onChange: (value: string) => void;
};
const InputSearch = ({ defaultKeyword, onChange }: IInputSearch) => {
  const [valueSearch, setValueSearch] = useState(defaultKeyword || "");
  const debounceFn = useCallback(
    _.debounce(handleDebounceFn, INPUT_TIME_DELAY),
    [defaultKeyword]
  );

  function handleDebounceFn(keyword: string) {
    onChange(keyword);
  }

  const handleSearchChange = (e: any) => {
    setValueSearch(e.target.value);
    debounceFn(e.target.value.trim());
  };

  return (
    <InputText
      value={valueSearch}
      placeholder="Input search"
      keyName={""}
      onChange={handleSearchChange}
    />
  );
};
export default InputSearch;
