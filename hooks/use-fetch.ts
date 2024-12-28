import { useState } from "react";
import { toast } from "sonner";

type CallbackFunction<T, Args extends any[]> = (...args: Args) => Promise<T>;

export const useFetch = <T, Args extends any[]>(
  cb: CallbackFunction<T, Args>
) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fn = async (...args: Args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (err) {
      const error = err instanceof Error ? err : new Error("An error occurred");
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};
