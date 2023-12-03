
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { ConfigProvider, Layout } from 'antd';
import theme from '@/theme/themeConfig'
import StoreProvider from '../StoreProvider'
import Header from '@/components/checkout/Header';
import themeCheckout from '@/theme/themeCheckoutConfig';
import Footer from '@/components/checkout/Footer';

const roboto = Roboto({ subsets: ['cyrillic'], weight: '400' })

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <StyledComponentsRegistry>
            <ConfigProvider
              theme={
                themeCheckout
              }>
              <Header />
              <div style={{ backgroundColor: '#EAEAEA' }}>
                {children}
              </div>
              <Footer />
            </ConfigProvider>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  )
}
