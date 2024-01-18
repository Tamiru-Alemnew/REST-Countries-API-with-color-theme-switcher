"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from "react-redux";
import { store } from '../store/configureStore';
import Header from "../components/Header/Header";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
