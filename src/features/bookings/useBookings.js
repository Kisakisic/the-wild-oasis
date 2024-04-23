import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", filterValue };

  const sortByParam = searchParams.get("sortBy") || "startDate-desc";
  const [sortByField, sortByDirection] = sortByParam.split("-");
  const sortBy = !sortByParam
    ? null
    : { field: sortByField, direction: sortByDirection };

  const page = searchParams.get("page") || 1;

  const {
    isLoading,
    data: { data: bookings, count: count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, error, count };
};
