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
      menuHover: 'hover:text-gray-600',
      border: 'border-transparent',
      button: {
        default: 'bg-black text-white',
        hover: 'hover:bg-[#333333]'
      }
    },
    footer: {
      bg: 'bg-[#222222]',
      text: 'text-white',
      textMuted: 'text-[#a9a9a9]',
      border: 'border-transparent', // Remove blue lines
      primaryHover: 'hover:text-white hover:underline',
      navHover: 'hover:bg-slate-800',
      iconDefault: 'text-[#a9a9a9]',
      iconHover: 'hover:text-white'
    }
  };
}
