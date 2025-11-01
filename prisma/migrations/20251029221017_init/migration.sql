-- CreateTable
CREATE TABLE "paises" (
    "id" SERIAL NOT NULL,
    "pais_nro" INTEGER NOT NULL,
    "pais" VARCHAR(50) NOT NULL,
    "codigo" VARCHAR(3) NOT NULL,
    "iso_2" VARCHAR(2) NOT NULL,
    "iso_3" VARCHAR(3) NOT NULL,
    "moneda" VARCHAR(15) NOT NULL,
    "continente" VARCHAR(4) NOT NULL,

    CONSTRAINT "paises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estados" (
    "id" SERIAL NOT NULL,
    "id_pais" INTEGER NOT NULL,
    "id_estado_cid" VARCHAR(5) NOT NULL,
    "estado" VARCHAR(50) NOT NULL,
    "capital" VARCHAR(50) NOT NULL,

    CONSTRAINT "estados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ciudades" (
    "id" SERIAL NOT NULL,
    "id_pais" INTEGER NOT NULL,
    "id_estado" INTEGER,
    "id_ciudad" INTEGER NOT NULL,
    "ciudad" VARCHAR(50) NOT NULL,

    CONSTRAINT "ciudades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "codigos_postales" (
    "id" SERIAL NOT NULL,
    "provincia" VARCHAR(50) NOT NULL,
    "ciudad" VARCHAR(50) NOT NULL,
    "cp" VARCHAR(5) NOT NULL,
    "id_pais" INTEGER NOT NULL,

    CONSTRAINT "codigos_postales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos_via" (
    "id" SERIAL NOT NULL,
    "tipo_via" VARCHAR(50) NOT NULL,

    CONSTRAINT "tipos_via_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "usuario" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "nombres" VARCHAR(30) NOT NULL,
    "apellido1re" VARCHAR(15) NOT NULL,
    "apellido2do" VARCHAR(15) NOT NULL,
    "rol" VARCHAR(20) NOT NULL DEFAULT 'admin',
    "activo" SMALLINT NOT NULL DEFAULT 1,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socios" (
    "id" SERIAL NOT NULL,
    "id_socio" INTEGER NOT NULL,
    "id_admin" INTEGER NOT NULL,
    "nombres" VARCHAR(30) NOT NULL,
    "apellido1re" VARCHAR(15) NOT NULL,
    "apellido2do" VARCHAR(15) NOT NULL,
    "miembroprincipal" SMALLINT NOT NULL DEFAULT 1,

    CONSTRAINT "socios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asociados" (
    "id" SERIAL NOT NULL,
    "id_socio" INTEGER NOT NULL,
    "id_asociado" INTEGER NOT NULL,
    "tipo_documento" VARCHAR(3) NOT NULL,
    "numero_documento" VARCHAR(15) NOT NULL,
    "nombres" VARCHAR(30) NOT NULL,
    "apellido1re" VARCHAR(15) NOT NULL,
    "apellido2do" VARCHAR(15) NOT NULL,
    "fecha_nacimiento" DATE NOT NULL,
    "genero" VARCHAR(1) NOT NULL,
    "nacionalidad" INTEGER NOT NULL,
    "pais_nacimiento" INTEGER NOT NULL,
    "estado_nacimiento" INTEGER,
    "ciudad_nacimiento" INTEGER,
    "numero_telefonico" VARCHAR(20),
    "ocupacion" VARCHAR(100),
    "profesion" VARCHAR(100),
    "miembroPrincipal" SMALLINT NOT NULL DEFAULT 0,
    "alimentacion1" SMALLINT NOT NULL DEFAULT 1,

    CONSTRAINT "asociados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "direcciones" (
    "id" SERIAL NOT NULL,
    "id_socio" INTEGER NOT NULL,
    "id_tipo_via" INTEGER NOT NULL,
    "nombre_via" VARCHAR(255) NOT NULL,
    "numero" VARCHAR(10) NOT NULL,
    "portal" VARCHAR(5) NOT NULL,
    "piso" VARCHAR(10) NOT NULL,
    "apartamento" VARCHAR(10) NOT NULL,
    "pueblo" VARCHAR(1) NOT NULL,
    "nombre_pueblo" VARCHAR(255) NOT NULL,
    "codigo_postal" VARCHAR(5) NOT NULL,
    "activa" SMALLINT NOT NULL DEFAULT 1,

    CONSTRAINT "direcciones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "paises_pais_nro_key" ON "paises"("pais_nro");

-- CreateIndex
CREATE UNIQUE INDEX "ciudades_id_ciudad_key" ON "ciudades"("id_ciudad");

-- CreateIndex
CREATE UNIQUE INDEX "codigos_postales_cp_key" ON "codigos_postales"("cp");

-- CreateIndex
CREATE UNIQUE INDEX "tipos_via_tipo_via_key" ON "tipos_via"("tipo_via");

-- CreateIndex
CREATE UNIQUE INDEX "admins_usuario_key" ON "admins"("usuario");

-- CreateIndex
CREATE UNIQUE INDEX "socios_id_socio_key" ON "socios"("id_socio");

-- CreateIndex
CREATE UNIQUE INDEX "asociados_numero_documento_key" ON "asociados"("numero_documento");

-- CreateIndex
CREATE UNIQUE INDEX "asociados_id_socio_id_asociado_key" ON "asociados"("id_socio", "id_asociado");

-- AddForeignKey
ALTER TABLE "estados" ADD CONSTRAINT "estados_id_pais_fkey" FOREIGN KEY ("id_pais") REFERENCES "paises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ciudades" ADD CONSTRAINT "ciudades_id_pais_fkey" FOREIGN KEY ("id_pais") REFERENCES "paises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ciudades" ADD CONSTRAINT "ciudades_id_estado_fkey" FOREIGN KEY ("id_estado") REFERENCES "estados"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "codigos_postales" ADD CONSTRAINT "codigos_postales_id_pais_fkey" FOREIGN KEY ("id_pais") REFERENCES "paises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socios" ADD CONSTRAINT "socios_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asociados" ADD CONSTRAINT "asociados_id_socio_fkey" FOREIGN KEY ("id_socio") REFERENCES "socios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asociados" ADD CONSTRAINT "asociados_nacionalidad_fkey" FOREIGN KEY ("nacionalidad") REFERENCES "paises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asociados" ADD CONSTRAINT "asociados_pais_nacimiento_fkey" FOREIGN KEY ("pais_nacimiento") REFERENCES "paises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asociados" ADD CONSTRAINT "asociados_estado_nacimiento_fkey" FOREIGN KEY ("estado_nacimiento") REFERENCES "estados"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asociados" ADD CONSTRAINT "asociados_ciudad_nacimiento_fkey" FOREIGN KEY ("ciudad_nacimiento") REFERENCES "ciudades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones" ADD CONSTRAINT "direcciones_id_socio_fkey" FOREIGN KEY ("id_socio") REFERENCES "socios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones" ADD CONSTRAINT "direcciones_id_tipo_via_fkey" FOREIGN KEY ("id_tipo_via") REFERENCES "tipos_via"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones" ADD CONSTRAINT "direcciones_codigo_postal_fkey" FOREIGN KEY ("codigo_postal") REFERENCES "codigos_postales"("cp") ON DELETE RESTRICT ON UPDATE CASCADE;
