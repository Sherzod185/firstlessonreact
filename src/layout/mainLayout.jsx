import { Header, Footer } from "../components";
import React from "react";
export const MainLayout=(user)=>{
  return <>
  <header>
    <Header />
  </header>
  <main>{user.children}</main>
  <footer>
    <Footer />
  </footer>
  </>
}