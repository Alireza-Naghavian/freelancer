import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../../../services/projectServices";
import Filter from "../../../ui/Filter";
import useProjects from "../../../hooks/useProjects";
const sortOption = [
  {
    label: "مرتب سازی(جدیدترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی(قدیمی ترین)",
    value: "earliest",
  },
];
const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];
function ProjectHeader() {
  const { transformedCategories } = useCategories();
  const { data } = useQuery({
    queryFn: getProjectsApi,
  });
  return (
    <div className="flex items-center justify-between text-stone-500 mb-8">
      <h1 className="text-lg font-VazirBold">پروژه ها</h1>
      <div className="flex gap-x-10 ">
        <Filter filterFiled={"status"} options={statusOptions} />
        <FilterDropDown filterFiled={"sort"} options={sortOption} />
        <FilterDropDown
          filterFiled={"category"}
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
