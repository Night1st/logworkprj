import LanguageSwitcher from '../business/LanguageSwitch';
import ThemeModeToggle from '../business/ToggleThemeMode';
import type { Metadata } from 'next';
import SidebarNav from './SideBar/SidebarNav';
import Link from 'next/link';
import Image from 'next/image';
import { Horizontalbar } from './HorizontalBar/HorizontalBar';
import { APP_MENU } from '@/shared/utils/constants/menu';
import { MENULAYOUT } from '@/Settings';

export const metadata: Metadata = {
    title: 'Admin dashboard',
    description: 'Admin dashboard',
};

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <div className='flex min-h-screen flex-col'>
                <header className='sticky top-0 z-40 border-b bg-background'>
                    <div className='flex h-16 items-center justify-between px-8 py-4'>
                        <div className='flex items-center gap-4'>
                            <Link href='/' className='hidden items-center space-x-2 md:flex'>
                                <Image src='/logo_single.svg' width={48} height={48} alt='Logo' />
                                <span className='hidden font-bold sm:inline-block'>{/* {siteConfig.name} */}</span>
                            </Link>
                            {MENULAYOUT === 'horizontal' && <Horizontalbar menus={APP_MENU} />}
                        </div>
                        <div>
                            <LanguageSwitcher />
                            <span className='ml-[20px]'>
                                <ThemeModeToggle />
                            </span>
                        </div>
                    </div>
                </header>
                {MENULAYOUT === 'vertical' && (
                    <div className='mt-0 flex'>
                        <aside className='w-[200px] flex-col bg-primary-foreground/5 md:flex py-4 pl-2 dark:border shadow-lg  
                        h-[calc(100vh_-_65px)] overflow-y-auto'>
                            <SidebarNav menus={APP_MENU} />
                        </aside>
                        <main className='flex flex-grow overflow-hidden px-4'>{children}</main>
                    </div>
                )}
                {MENULAYOUT === 'horizontal' && (
                    <div className='p-10'>
                        <main className='w-full overflow-hidden px-4'>{children}</main>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DashBoardLayout;
