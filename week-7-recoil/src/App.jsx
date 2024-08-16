import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atom';
import { RecoilRoot, useRecoilValue } from 'recoil';

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  return <div>
      <button>Home</button>

      <button>Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Messages ({messageCount >= 100 ? "99+" : messageCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>Notifications ({notificationCount >= 100 ? "99+" : notificationCount})</button>

      <button>Me</button>
   </div>
}

export default App
