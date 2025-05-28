// Marketing layout theme hook - Single theme only (no dark/light variants)
export function useMarketingTheme() {
  return {
    footer: {
      bg: 'bg-[#111111]',
      text: 'text-white',
      textMuted: 'text-[#a9a9a9]',
      border: 'border-transparent', // Remove blue lines
      primaryHover: 'hover:text-white hover:underline',
      navHover: 'hover:bg-slate-800'
    }
  };
}
