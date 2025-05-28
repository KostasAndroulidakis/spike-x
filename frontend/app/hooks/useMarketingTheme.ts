// Marketing layout theme hook - Single theme only (no dark/light variants)
export function useMarketingTheme() {
  return {
    page: {
      bg: 'bg-white',
      text: 'text-black'
    },
    navbar: {
      bg: 'bg-white',
      text: 'text-black',
      logo: 'text-black',
      menuHover: 'hover:text-gray-600 hover:underline',
      border: 'border-transparent',
      button: {
        default: 'bg-black text-white',
        hover: 'hover:bg-[#333333]'
      }
    },
    footer: {
      bg: 'bg-[#141413]', // Direct color instead of custom class
      text: 'text-white',
      textMuted: 'text-[#a9a9a9]',
      border: 'border-transparent',
      primaryHover: 'hover:text-white hover:underline',
      navHover: 'hover:bg-slate-800',
      iconDefault: 'text-[#a9a9a9]',
      iconHover: 'hover:text-white'
    },
    content: {
      // Marketing-specific content styling (no dark variants)
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      textSecondary: 'text-gray-600',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-green-50',
      buttonSecondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
    }
  };
}
