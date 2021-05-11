import React from 'react'
import Input from './input'

const Header= (props: any) => {
  return (
    <header>
      <h3 className="center">Todo List</h3>
      <Input currentPage={props.currentPage}/>
    </header>
  );
}

export default Header