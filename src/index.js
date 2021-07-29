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

export function thousandsNumber(variable, isStrict, failReturnValue) {
  let ca = transformStringNumber(variable, isStrict, false);
  if (ca === false) {
    return failReturnValue;
  }

  const arrCA = `${ca}`.split('.');
  // Decimal part processing 保留几位小数
  // if (arrCA.length === 1) {
  //   arrCA[1] = '00';
  // } else if (arrCA[1].length == 1) {
  //   arrCA[1] += '0';
  // }

  // Integer partial processing
  arrCA[0] = arrCA[0].replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
  return arrCA.join('.');
}

export function isMoney(variable) {
  return String(variable) !== '' && /^(0|[1-9][0-9]*)?(\.[0-9]{1,2})?$/.test(variable);
}

// switch (approximationMethod) {
//   case -1:
//     ca = numberFloor(ca); // 去尾
//     break;
//   case 0:
//     ca = ca; // 啥都不做
//     break;
//   case 1:
//     ca =  numberCeil(ca); // 进一
//     break;
//   default:
//     ca =  numberRound(ca); // 四舍五入
//     break;
// }

export default {
  typeIs, isNumber, isStringNumber, transformStringNumber, thousandsNumber, isMoney,
};