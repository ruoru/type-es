export function typeIs(variable) {
  const intrinsicType = Object.prototype.toString.call(variable) || '';
  const typeName = intrinsicType.replace(/^\[object |\]$/gi, '');
  return typeName.toLowerCase();
}

export function isNumber(variable) {
  return typeIs(variable) === 'number' && Number.isFinite(variable);
}

export function isStringNumber(variable, isStrict) {
  // Number('') === 0
  if (!['number', 'string'].includes(typeIs(variable)) || variable === '') {
    return false;
  }
  const num = isStrict ? Number(variable) : parseFloat(variable);
  return Number.isFinite(num);
}

export function transformStringNumber(variable, isStrict, failReturnValue) {
  // Number('') === 0
  if (!['number', 'string'].includes(typeIs(variable)) || variable === '') {
    return failReturnValue;
  }
  const num = isStrict ? Number(variable) : parseFloat(variable);
  return Number.isFinite(num) ? num : failReturnValue;
}

export function isMoney(variable) {
  return String(variable) !== '' && /^(0|[1-9][0-9]*)?(\.[0-9]{1,2})?$/.test(variable);
}

export default {
  typeIs, isNumber, isMoney, transformStringNumber,
};