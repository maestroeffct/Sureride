export const getFontFamily = (fontFamily = 'Inter-', weight = 'Regular') => {
  switch (weight) {
    case 'Thin':
      return `${fontFamily}Thin`;
    case 'ExtraLight':
      return `${fontFamily}ExtraLight`;
    case 'Light':
      return `${fontFamily}Light`;
    case 'Regular':
      return `${fontFamily}Regular`;
    case 'Medium':
      return `${fontFamily}Medium`;
    case 'SemiBold':
      return `${fontFamily}SemiBold`;
    case 'Bold':
      return `${fontFamily}Bold`;
    case 'ExtraBold':
      return `${fontFamily}ExtraBold`;
    case 'Black':
      return `${fontFamily}Black`;
    default:
      return `${fontFamily}Regular`;
  }
};
