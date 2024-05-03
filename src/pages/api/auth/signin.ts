import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import { User } from "../../../models/User";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const body = await request.json();
  const user = new User(body);

  if (!user.email || !user.password) {
    return new Response("Correo electrónico y contraseña obligatorios", { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });
  return redirect("/dashboard");
};