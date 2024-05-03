export class User {
    email: string;
    password: string;
    nombre: string;
    fecNacimiento: string;
    direccion: string;
    ciudad: string;
  
    constructor(formData: FormData) {
        this.email = formData.get("email")?.toString() || "";
        this.password = formData.get("password")?.toString() || "";
        this.nombre = formData.get("nombre")?.toString() || "";
        this.fecNacimiento = formData.get("fecNacimiento")?.toString() || "";
        this.direccion = formData.get("direccion")?.toString() || "";
        this.ciudad = formData.get("ciudad")?.toString() || "";
    }
  }