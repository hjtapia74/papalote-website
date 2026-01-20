import { createContext, useContext, useState, type ReactNode } from 'react'

interface OfferingContextType {
  activeOffering: number
  setActiveOffering: (index: number) => void
}

const OfferingContext = createContext<OfferingContextType | undefined>(undefined)

interface OfferingProviderProps {
  children: ReactNode
}

export function OfferingProvider({ children }: OfferingProviderProps) {
  const [activeOffering, setActiveOffering] = useState(0)

  return (
    <OfferingContext.Provider value={{ activeOffering, setActiveOffering }}>
      {children}
    </OfferingContext.Provider>
  )
}

export function useOffering() {
  const context = useContext(OfferingContext)
  if (context === undefined) {
    throw new Error('useOffering must be used within an OfferingProvider')
  }
  return context
}
