export function displayEnum(enumString: string) {
  if (!enumString) {
    return;
  }
  let formattedString = enumString?.toString()?.split('_');
  formattedString = formattedString.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
  return formattedString.join(' ');
}
