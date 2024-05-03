// https://app.quicktype.io/

export type ForzAPI = {
    Usuarios:  Usuario[];
    Productos: Producto[];
}

export type Producto = {
    id:          number;
    nombre:      string;
    precio:      number;
    descripcion: string;
    stock:       number;
    user:        string;
}

export type Usuario = {
    idUser:        number;
    nombre:        string;
    email:         string;
    password:      string;
    fecNacimiento: Date;
    fecRegister:   Date;
    uuid:          null | string;
    direccion:     null;
    ciudad:        null;
}
