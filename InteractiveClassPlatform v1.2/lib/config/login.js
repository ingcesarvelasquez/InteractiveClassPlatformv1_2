Meteor.startup(function(){
var es_MX;
es_MX = {
  add: "agregar",
  and: "y",
  back: "atrás",
  changePassword: "Cambiar Contraseña",
  choosePassword: "Eligir Contraseña",
  clickAgree: "Al pulsar en Registrarse confirmas que estás de acuerdo con la",
  configure: "Configurar",
  createAccount: "Crear una cuenta",
  currentPassword: "Contraseña actual",
  dontHaveAnAccount: "¿No estás registrado?",
  email: "Email",
  emailAddress: "Dirección de email",
  emailResetLink: "Recuperar Acceso",
  forgotPassword: "¿Has olvidado tu contraseña?",
  ifYouAlreadyHaveAnAccount: "¿Tienes una Cuenta?",
  newPassword: "Nueva Contraseña",
  newPasswordAgain: "Confirmar Nueva Contraseña",
  optional: "Opcional",
  OR: "O",
  password: "Contraseña",
  passwordAgain: "Confirmar Contraseña",
  privacyPolicy: "Política de Privacidad",
  remove: "remover",
  resetYourPassword: "Recuperar tu contraseña",
  setPassword: "Definir Contraseña",
  sign: "Ingresa a tu Cuenta",
  signIn: "Ingresa a tu Cuenta",
  signin: "Ingresa",
  signOut: "Salir",
  signUp: "Registrarse",
  signupCode: "Código para registrarte",
  signUpWithYourEmailAddress: "Regístrate con tu email",
  terms: "Condiciones de Uso",
  updateYourPassword: "Actualizar tu contraseña",
  username: "Usuario",
  usernameOrEmail: "Usuario o email",
  "with": "con",
  info: {
    emailSent: "Email enviado",
    emailVerified: "Email verificado",
    passwordChanged: "Contraseña cambiado",
    passwordReset: "Resetar Contraseña"
  },
  error: {
    emailRequired: "El email es necesario",
    minChar: "7 carácteres mínimo",
    pwdsDontMatch: "las Contraseñas no coinciden",
    pwOneDigit: "se requiere mínimo un dígito",
    pwOneLetter: "se requiere mínimo una letra",
    signInRequired: "Debes iniciar sesión para esta opción",
    signupCodeIncorrect: "Código de registro inválido",
    signupCodeRequired: "Se requiere un código de registro",
    usernameIsEmail: "El usuario no puede ser una dirección de correo electrónico",
    usernameRequired: "Se quiere nombre de usuario",
    accounts: {
      "Email already exists.": "El correo ya existe",
      "Login forbidden": "Error de Acceso",
      "Email doesn't match the criteria": "El correo no coincide",
      "User validation failed": "No hemos podido verificar el usuario",
      "Username already exists": "Este usuario ya existe",
      "You've been logged out by the server. Please log in again": "Has sido desconectado por el servidor. Por favor inicia sesión de nuevo",
      "Your session has expired. Please log in again": "Tu session ha expirado. Por favor inicia sesión de nuevo",
      "Incorrect password": "Contraseña inválida",
      "Must be logged in": "Debes iniciar sesión",
      "Need to set a username or email": "Debes especificar un usuario o email",
      "Signups forbidden": "Los registros no están permitidos en este momento",
      "Token expired": "El token ha expirado",
      "Token has invalid email address": "EL token contiene un email inválido",
      "User has no password set": "En esta cuenta solo puedes ingresar usando Facebook",
      "User not found": "Usuario no encontrado",
      "Verify email link expired": "El enlace para verificar el email ha expierado",
      "Verify email link is for unknown address": "El enlace para verificar el email está asociado a una dirección desconocida"
    }
  }
};
T9n.map("es_MX", es_MX);
T9n.map("es-MX", es_MX);
T9n.setLanguage('es-MX');
});
AccountsTemplates.addField({
    _id: 'nombre',
    type: 'text',
    displayName: "Nombre",
    errStr: 'Se requiere el nombre',
    required:true
});
AccountsTemplates.addField({
    _id: 'apellido',
    type: 'text',
    displayName: "Apellido",
    errStr: 'Se requiere el apellido',
    required:true
});

AccountsTemplates.configure({
    showForgotPasswordLink:true,
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink:true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: '',
    termsUrl: '',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,
    texts: {
        requiredField: "Dato Requerido"
    }
});
