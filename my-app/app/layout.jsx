// app/layout.js
import "@/styles/globals.css";

export const metadata = {
  title: "Word Counter App",
  description: "Count words easily with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
