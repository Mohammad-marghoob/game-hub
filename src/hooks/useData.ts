import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setloading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setloading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, loading };
}
