import Conversion from "./components/Conversion";

export default function App() {
  return (
    <div>
      <Conversion
        bonds={[
          { name: 'LFT', price: 1000, icon: '/path/to/lft/icon.svg' },
          { name: 'LTN', price: 900, icon: '/path/to/ltn/icon.svg' },
          { name: 'NTN-F', price: 1100, icon: '/path/to/ntnf/icon.svg' },
          { name: 'NTN-B', price: 950, icon: '/path/to/ntnb/icon.svg' },
          { name: 'NTN-B Principal', price: 1050, icon: '/path/to/ntnb-principal/icon.svg' },
          { name: 'NTN-C', price: 900, icon: '/path/to/ntnc/icon.svg' },
          // Add other bonds as needed
        ]}
        currencies={[
          { name: 'BRL', rate: 5.2, icon: '/path/to/brl/icon.svg' },
          { name: 'USD', rate: 1, icon: '/path/to/usd/icon.svg' },
          // ... other currencies
        ]}
      />
    </div>
  )
}