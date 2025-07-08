import NavBar from "@/components/nav-bar";
import "./globals.css";
import { ProductProvider } from "@/context/product-context";

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
        {children}
        </ProductProvider>
      </body>
    </html>
  );
}
