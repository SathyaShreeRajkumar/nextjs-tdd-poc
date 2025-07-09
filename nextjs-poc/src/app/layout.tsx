import NavBar from "@/components/nav-bar";
import "./globals.css";
import { ProductProvider } from "@/context/product-context";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
        <NavBar />
        <Toaster  position="top-right" />
        {children}
        </ProductProvider>
      </body>
    </html>
  );
}
