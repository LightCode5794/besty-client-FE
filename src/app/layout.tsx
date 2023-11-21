
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'
import StyledComponentsRegistry from '../lib/AntdRegistry'
import MyNavbar from '../components/Navbar'
const roboto = Roboto({ subsets: ['latin'], weight: '400' })
import { Layout } from 'antd';



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={roboto.className}>

        <StyledComponentsRegistry>
          <Layout>
            <MyNavbar />
            {children}
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
