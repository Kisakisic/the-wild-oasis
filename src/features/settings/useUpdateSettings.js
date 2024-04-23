import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingsApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
    name: ["settings"],
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success("Succesfully update settings");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => {
      toast.error("Couldn't update settings");
    },
  });

  return { isUpdating, updateSettings };
}
