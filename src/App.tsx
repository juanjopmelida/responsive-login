import { useEffect, useState } from "react";

import IUser from "./types/user.type";
import * as AuthService from "./services/auth.service";

const App: React.FC = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false);
  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
  }, []);

  return <div></div>;
};

export default App;
