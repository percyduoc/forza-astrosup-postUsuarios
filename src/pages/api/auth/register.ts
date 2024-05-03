import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    // const nombre = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    // const fecNacimiento = formData.get("fecNacimiento")?.toString();
    // const direccion = formData.get("direccion")?.toString();
    // const ciudad = formData.get("ciudad")?.toString();

    if (!email || !password) {
        return new Response("El email y la contraseña son requeridos", { status: 400 });
    }

    const { error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    // const { data: insertData, error: insertError } = await supabase
    //     .from('user')
    //     .insert([{ nombre, email, password, fecNacimiento, direccion, ciudad }])
    //     .select();

    // if (insertError) {
    //     return new Response(insertError.message, { status: 500 });
    // }

    return redirect("/signin");
};

