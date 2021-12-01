export default function authHeader() {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr) user = JSON.parse(userStr);

  return user?.accessToken ? { "x-access-token": user.accessToken } : {};
}
