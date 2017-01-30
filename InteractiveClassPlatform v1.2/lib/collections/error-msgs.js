if(Meteor.isClient){
SimpleSchema.messages({
  required: "El dato '[label]' es requerido",
  exactLength:"El '[label]' debe tener 10 dígitos",
  noCredits:"No cuentas con saldo suficiente para procesar este Equipo",
  alreadyExists:"Esta Serie ya ha sido procesada anteriormente por este Servicio, prueba con otro servicio o contáctanos.",
  minString: "'[label]' debe incluir al menos [min] caracteres",
  maxString: "'[label]' no puede exceder de [max] caracteres",
  minNumber: "'[label]' must be at least [min]",
  maxNumber: "'[label]' cannot exceed [max]",
  minDate: "'[label]' must be on or after [min]",
  maxDate: "'[label]' cannot be after [max]",
  badDate: "'[label]' is not a valid date",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "El '[label]' debe contener sólo números, sin letras o signos de puntuación",
  notAllowed: "[value] is not an allowed value",
  expectedString: "'[label]' must be a string",
  expectedNumber: "'[label]' must be a number",
  expectedBoolean: "'[label]' must be a boolean",
  expectedArray: "'[label]' must be an array",
  expectedObject: "'[label]' must be an object",
  expectedConstructor: "'[label]' must be a [type]",
  regEx: [
    {msg: "'[label]' failed regular expression validation"},
    {exp: SimpleSchema.RegEx.Email, msg: "El dato '[label]' debe ser un e-mail válido"},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: "El dato '[label]' debe ser un e-mail válido"},
    {exp: SimpleSchema.RegEx.Domain, msg: "'[label]' must be a valid domain"},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: "'[label]' must be a valid domain"},
    {exp: SimpleSchema.RegEx.IP, msg: "'[label]' must be a valid IPv4 or IPv6 address"},
    {exp: SimpleSchema.RegEx.IPv4, msg: "'[label]' must be a valid IPv4 address"},
    {exp: SimpleSchema.RegEx.IPv6, msg: "'[label]' must be a valid IPv6 address"},
    {exp: SimpleSchema.RegEx.Url, msg: "'[label]' debe ser una Dirección Web Válida"},
    {exp: SimpleSchema.RegEx.Id, msg: "'[label]' must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[key] is not allowed by the schema"
});
}
