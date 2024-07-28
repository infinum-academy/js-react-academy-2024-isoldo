import type { Metadata } from "next";
import { Providers } from "./providers";
import SidebarNavigation from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Flex } from "@chakra-ui/react";
import AuthRedirectContainer from "@/components/features/auth/AuthRedirectContainer/AuthRedirectContainer";

export const metadata: Metadata = {
  title: "TV Shows App | React Course @ Infinum Academy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthRedirectContainer />
          <Flex bg="darkPurple">
            <SidebarNavigation />
            <Box flex='1' flexDir='row' minHeight="100vh">
              {children}
            </Box>
          </Flex>
        </Providers></body>
    </html>
  );
}
