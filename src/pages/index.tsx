import { WithApollo } from '../components/withApollo';
import { User } from '../components/user';

export default function Home() {
  return (
    <main
      className="
      flex
      flex-col
      items-center
      justify-center
      w-full
      flex-1
      text-center
      mt-20
    ">
      <WithApollo>
        <User />
      </WithApollo>
    </main>
  );
}
