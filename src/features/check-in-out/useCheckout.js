import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) => {
      updateBooking(bookingId, { status: "checked-out" });
    },

    onSuccess: () => {
      toast.success(`Booking is successfully checked out`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["booking"] });
    },
    onError: () => {
      toast.error("There was and error checking out");
    },
  });

  return { checkout, isCheckingout };
}
