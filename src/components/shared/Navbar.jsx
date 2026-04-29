"use client";
import { useState } from "react";
import GuestNavbar from "./GuestNav";
import UserNavbar from "./UserNav";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <nav>{isLoggedIn ? <UserNavbar /> : <GuestNavbar />}</nav>;
}
