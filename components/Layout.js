import {Fragment} from 'react'
import Nav from './Nav'
import Header from './Header'

const Layout = (props) => {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-start items-center px-2 pt-3">
          <Header />
        <main className="flex flex-col justify-start items-center flex-1 py-20">
          {props.children}
        </main>
      </div>
    </>
  );
}

export default Layout