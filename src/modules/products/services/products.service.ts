import axios from "axios";

interface CreatePreferenceResponse {
  id: string;
  init_point: string;
}

export async function createPreference(): Promise<CreatePreferenceResponse> {
  const response = await axios.post<CreatePreferenceResponse>(
    "http://localhost:3333/create_preference"
  );

  return response.data;
}
