import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const usePost = <T, R>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<R | null>(null);

  const postData = async (data: T) => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios.post(url, data);
      console.log(result, "sdfsdfsdfsd");
      alert("reza");
      setResponse(result.data);
      console.log(result, "resultShowMe");
      toast.success("Data submitted successfully!"); // Success notification
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error, response };
};
