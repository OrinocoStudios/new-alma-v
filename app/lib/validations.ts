import { z } from 'zod';

// Validaciones de documentos según tipo
const validateDNI = (value: string): boolean => {
  const dniRegex = /^\d{8}[A-Z]$/;
  return dniRegex.test(value);
};

const validateNIE = (value: string): boolean => {
  const nieRegex = /^[XYZ]\d{7}[A-Z]$/;
  return nieRegex.test(value);
};

const validatePassport = (value: string): boolean => {
  // 10 a 15 caracteres alfanuméricos
  const passportRegex = /^[A-Z0-9]{10,15}$/;
  return passportRegex.test(value);
};

// Validar teléfono: 9 dígitos para España
const validatePhoneFormat = (value: string): boolean => {
  const phoneRegex = /^\d{9}$/;
  return phoneRegex.test(value);
};

// Schema para login de admin
export const LoginAdminSchema = z.object({
  usuario: z.string().min(3, 'Usuario debe tener al menos 3 caracteres').max(50),
  password: z.string().min(1, 'Contraseña requerida'),
});

export type LoginAdmin = z.infer<typeof LoginAdminSchema>;

// Schema para login de socio (deprecated - solo para referencia)
export const LoginSocioSchema = z.object({
  id_socio: z.string().min(1, 'ID de socio requerido'),
  numero_documento: z.string().min(1, 'Número de documento requerido'),
});

export type LoginSocio = z.infer<typeof LoginSocioSchema>;

// Schema para asociado (grupo familiar)
export const AsociadoSchema = z.object({
  tipo_documento: z.enum(['DNI', 'PS', 'N', 'OTR']).catch('DNI'),
  numero_documento: z.string().min(1, 'Número de documento requerido').transform((val) => val.toUpperCase()),
  nombres: z.string().min(1, 'Nombres requeridos').max(30),
  apellido1re: z.string().min(1, 'Primer apellido requerido').max(15),
  apellido2do: z.string().min(1, 'Segundo apellido requerido').max(15),
  fecha_nacimiento: z.string().refine((val) => {
    // Validar formato DD/MM/YYYY
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dateRegex.test(val);
  }, 'Formato de fecha inválido (DD/MM/YYYY)'),
  genero: z.enum(['H', 'M']).catch('H'),
  nacionalidad: z.string().min(1, 'Nacionalidad requerida'),
  pais_nacimiento: z.string().min(1, 'País de nacimiento requerido'),
  estado_nacimiento: z.string().optional().nullable(),
  ciudad_nacimiento: z.string().optional().nullable(),
  numero_telefonico: z.string().regex(/^\d{9}$/, 'Teléfono debe tener 9 dígitos').optional().or(z.literal('')),
  ocupacion: z.string().min(1, 'Ocupación requerida').max(100).optional().or(z.literal('')),
  profesion: z.string().min(1, 'Profesión requerida').max(100).optional().or(z.literal('')),
});

export type Asociado = z.infer<typeof AsociadoSchema>;

// Schema para dirección
export const DireccionSchema = z.object({
  id_tipo_via: z.string().min(1, 'Tipo de vía requerido'),
  nombre_via: z.string().min(1, 'Nombre de vía requerido').max(255),
  numero: z.string().max(10).optional(),
  portal: z.string().max(5).optional(),
  piso: z.string().max(10).optional(),
  apartamento: z.string().max(10).optional(),
  pueblo: z.enum(['1', '2', '3']).catch('1'),
  nombre_pueblo: z.string().min(1, 'Nombre de pueblo/sector requerido').max(255),
  codigo_postal: z.string().regex(/^\d{5}$/, 'Código postal debe tener 5 dígitos'),
});

export type Direccion = z.infer<typeof DireccionSchema>;

// Funciones helper
export function formatDateForDB(dateStr: string): string {
  // Convierte DD/MM/YYYY a YYYY-MM-DD
  const [day, month, year] = dateStr.split('/');
  return `${year}-${month}-${day}`;
}

export function formatDateForDisplay(dateStr: string): string {
  // Convierte YYYY-MM-DD a DD/MM/YYYY
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export function validateDocumentByType(type: string, document: string): boolean {
  const upperDoc = document.toUpperCase();
  
  switch (type) {
    case 'DNI':
      return validateDNI(upperDoc);
    case 'N': // NIE
      return validateNIE(upperDoc);
    case 'PS': // Pasaporte
    case 'OTR': // Otros
      return validatePassport(upperDoc);
    default:
      return false;
  }
}

export function getDefaultNationality(documentType: string): string {
  switch (documentType) {
    case 'N': // NIE -> España
      return 'España';
    case 'DNI': // DNI -> España
      return 'España';
    default:
      return 'Venezuela';
  }
}
