import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Message from "~/components/Message";

export default function Home() {
  return (
    <main>
      <Title>クリッカー！</Title>
      <div class="flex justify-center my-5">
        <h1 class="text-pink-700 text-3xl">とにかくクリックするんだ！</h1>
      </div>
      <div class="flex justify-center my-5">
        <Counter />
      </div>
      <div class="flex justify-center my-5">
        <Message num="3" />
      </div>
    </main>
  );
}
