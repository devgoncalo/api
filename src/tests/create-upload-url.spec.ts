import { expectTypeOf, test } from "vitest";

const API_BASE_URL = "http://localhost:3333";

test("createUploadURL endpoint", async () => {
  
  const uploadData = {
    name: "test_file.txt",
    contentType: "text/plain",
  };

  const response = await fetch(`${API_BASE_URL}/uploads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...uploadData,
    }),
  });

  const responseData = await response.json();

  expectTypeOf(responseData).toMatchTypeOf<{ signedUrl: string }>();
  expectTypeOf(responseData).toMatchTypeOf<{ downloadUrl: string }>();
});