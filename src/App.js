import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>アイスクリーム</PrimaryButton>
      <SecondaryButton>ようかん</SecondaryButton>
    </div>
  );
}
