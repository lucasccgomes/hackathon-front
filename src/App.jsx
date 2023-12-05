import Conversion from "./components/Conversion";
import IconDocument from "./assets/document-svgrepo-com.svg";
import IconUsd from "./assets/usd-svgrepo-com.svg";
import IconBrl from "./assets/real.png";

export default function App() {
  return (
    <div>
      <Conversion
        bonds={[
          { name: 'LFT', price: 1000, icon: <IconDocument />},
          { name: 'LTN', price: 900, icon: <IconDocument />},
          { name: 'NTN-F', price: 1100, icon: <IconDocument />},
          { name: 'NTN-B', price: 950, icon: <IconDocument />},
          { name: 'NTN-B Principal', price: 1050, icon: <IconDocument />},
          { name: 'NTN-C', price: 900, icon: <IconDocument />},
          // Add other bonds as needed
        ]}
        currencies={[
          { name: 'BRL', rate: 5.2, icon: <img src={IconBrl} alt="BRL" />},
          { name: 'USD', rate: 1, icon: <img src={IconUsd} alt="USD" /> },
          // ... other currencies
        ]}
      />
    </div>
  )
}