import axios from "axios";

export async function queryGraphQL(
  query: string,
  variables: Record<string, unknown>
) {
  const res = await axios.post(
    "/api/graphql",
    {
      query,
      variables,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.data;
}
