'use client';

import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import { usePathname } from "next/navigation";

const AUTH_NOT_REQUIRED_PATHS = [
  "/login",
  "/register"
];

export function isNavigationShown(path: string) {
  return !AUTH_NOT_REQUIRED_PATHS.includes(path);
}

export default function AuthRedirectContainer() {
  const path = usePathname();

  if(AUTH_NOT_REQUIRED_PATHS.includes(path)) {
    return (<AuthRedirect condition="loggedIn" to="/" />);
  }

  return (<AuthRedirect condition="loggedOut" to="/login" />);
}
