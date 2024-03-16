import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryServices";
const useCategories = () => {
  const { isPending, data } = useQuery({
    queryKey: ["categoris-get"],
    queryFn: getCategoryApi,
    retry: false,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isPending, categories, transformedCategories };
};
export default useCategories;
