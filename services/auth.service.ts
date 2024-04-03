export const loginService = async (loginData1: any) => {
  // Define the login data
  const loginData = {
    username: "kminchelle",
    password: "0lelplR",
    expiresInMins: 30, // optional, defaults to 60
  };

  // Return the fetch promise
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    if (!res.ok) {
      throw new Error("Failed to login");
    }
    return await res.json();
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
