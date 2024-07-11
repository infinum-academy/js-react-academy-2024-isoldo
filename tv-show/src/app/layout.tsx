import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import SidebarNavigation from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Box, Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Providers>
          <Flex>
            <SidebarNavigation />
            <Box flex='1' flexDir='row'>
              {children}
            </Box>
          </Flex>
        </Providers></body>
    </html>
  );
}
