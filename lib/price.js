export async function getPriceById(id) {
  try {
    const apiKey = process.env.API_KEY;
    // Validate inputs
    if (!apiKey) {
      console.error("API_KEY is not defined in environment variables");
      return null;
    }

    if (!id || typeof id !== "string" || id.trim() === "") {
      console.error("Invalid product ID:", id);
      return null;
    }

    const sanitizedId = id.trim();
    const apiUrl = `https://services.leadconnectorhq.com/products/${sanitizedId}/price?locationId=5JpmoDlPokekPDfym8Xb`;

    console.log(`Fetching product with ID: ${sanitizedId}`);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();

    // Validate response data
    if (!data || typeof data !== "object") {
      console.error("Invalid API response:", data);
      return null;
    }

    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error?.message || error);
    return null;
  }
}
