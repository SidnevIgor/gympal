import React, {useState} from 'react';

export const AppContext = React.createContext<any>([]);

const AppStore = ({user, children}) => {
  const [apploading, setAppLoading] = useState(false);
  const [appUser, setUser] = useState(user);

  return (
    <AppContext.Provider value={[apploading, setAppLoading, appUser, setUser]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
