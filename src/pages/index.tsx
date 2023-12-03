import { WithApollo } from '../components/withApollo';
import { User } from '../components/user';

export default function Home() {
  return (
    <main>
      <WithApollo>
        <User />
      </WithApollo>
    </main>
  );
}
