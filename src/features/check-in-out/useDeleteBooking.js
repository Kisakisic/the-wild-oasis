import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingg } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBookingg,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("Error deleting booking");
    },
  });

  return { deleteBooking, isDeleting };
}
