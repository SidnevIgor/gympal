import React, {useState} from 'react';

export const AppContext = React.createContext<any>([]);

const AppStore = ({children}) => {
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={[loading, setLoading]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
