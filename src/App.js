import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules//Searchinput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";

import "./styles.css";

const user = {
  name: "マンキュー",
  image: "https://source.unsplash.com/s87ngBxo4xg",
  email: "12345@example.com",
  phone: "070-0123-4567",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <HeaderOnly>
      <PrimaryButton>アイスクリーム</PrimaryButton>
      <SecondaryButton>ようかん</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}
