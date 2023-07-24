import ErrorBoundary from '@/shared/components/layouts/ErrorBoudary';
import { store } from '@/shared/stores';
import { MAX_RETRY_REQUEST } from '@/Settings';
import AbilityConfig from '@/shared/utils/functions/abilityBuild';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import ProgressBarProvider from '@/shared/components/common/ui/progressbar';
import DashBoardLayout from '@/shared/components/layouts/DashboardLayout';
import useRouterChange from '@/shared/hooks/useRouterChange';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, retry: MAX_RETRY_REQUEST } } });

export const AbilityContext = React.createContext(AbilityConfig());
AbilityContext.displayName = 'AbilityContext';

const Boostrap = ({
  children,
  getLayout,
}: {
  children: React.ReactElement;
  getLayout: (page: ReactElement) => ReactNode;
}) => {
  // useGetInfoByToken();
  // const isRouteLoading = useAppSelector(state => state.appSlice.isRouteLoading)
  // useReserveUrl();
  useRouterChange()
  // const roles = useAppSelector(state => state.appSlice.user?.rolePermissionActionDtos)
  return (
    <ProgressBarProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {getLayout(children)}
      </NextThemesProvider>
    </ProgressBarProvider>

    // <AbilityContext.Provider value={AbilityConfig(_.uniq(roles?.map(item => item.rolePermissionAction).flat(1)))}>
    //   {isRouteLoading && <div className='bg-slate-50 bg-opacity-70 absolute z-[9999] w-screen h-screen flex justify-center items-center'><HashLoader color="#016390"
    //     size={50} /></div>}
    //   {getLayout(children)}
    // </AbilityContext.Provider>
  )
}



function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page =>
    <DashBoardLayout>{page}</DashBoardLayout>
  );
  return (
    <ErrorBoundary>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        {/* <link rel="icon" href="https://careerfinder.vn/wp-content/uploads/2020/05/vietnam-airline-logo.jpg" /> */}
        {/* <link rel="apple-touch-icon" href="https://careerfinder.vn/wp-content/uploads/2020/05/vietnam-airline-logo.jpg" /> */}
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Boostrap getLayout={getLayout}>
            <Component {...pageProps} />
          </Boostrap>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
