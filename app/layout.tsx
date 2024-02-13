import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Toaster } from "react-hot-toast";
import ResponsiveAppBar from "@/components/Navbar";
import StickyFooter from "@/components/Footer";
 // or `v1X-appRouter` if you are using Next.js v1X

//  export default function RootLayout(props) {
//    return (
//      <html lang="en">
//        <body>
// +      
//        </body>
//      </html>
//    );
//  }


const APP_NAME = "Loan Origination";
const APP_DESCRIPTION = "This is loan-origination service by Azentio";

export const metadata: Metadata = {
  title: "Loan Origination",
  description: APP_DESCRIPTION,
  twitter: {
    card: "summary_large_image",
    creator: "mukul202",
    images: "https://example.com/og.png",
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#FFFFFF",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  keywords: ["loan", "origination", "loan-origination"],
};
export default function RootLayout(props:any) {
  return (
    <html lang="en">
      <body style={{
        position:"relative"
      }}>
        <AppRouterCacheProvider>
          <Toaster />
          <ResponsiveAppBar />
          {props.children}
          <StickyFooter />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}