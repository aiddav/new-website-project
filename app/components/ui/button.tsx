import Link from 'next/link'

export function Button({ children, ...props }: { children: React.ReactNode }) {
  return (
    <button 
      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
      {...props}
    >
      {children}
    </button>
  )
}