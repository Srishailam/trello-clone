import React from 'react';
import { useAppState } from './AppStateContext';
import { AddNewItem } from './components/AddNewItem/AddNewItem';
import { Card } from './components/Card/Card';
import { Column } from './components/Column/Column';
import { AppContainer } from './styles';

function App() {
  const { state, dispatch } = useAppState()
  return (
    <AppContainer>
      {
        state.lists.map((list, i) => (
          <Column text={list.text} key={list.id} id={list.id} index={i} />
        ))
      }
      <AddNewItem
        onAdd={text => dispatch({ type: "ADD_LIST", payload: text })}
        dark={true}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
}

export default App;
