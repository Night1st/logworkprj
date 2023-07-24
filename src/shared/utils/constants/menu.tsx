import { DashboardIcon } from "@radix-ui/react-icons";


export type MenuItem = {
    title: string;
    permission?: boolean;
    external?: boolean;
    href: string
    Icon?: React.ReactNode;
    chidren?: MenuItem[]
}


export const APP_MENU: MenuItem[] = [
    {
        title: 'WorkLog',
        href: '/worklog',
        Icon: <DashboardIcon className="mr-2 h-5 w-5" />,
        // chidren: [
        //     {
        //         title: 'Table',
        //         href: '/dashboard/table',
        //         Icon: <Settings2Icon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     },
        //     {
        //         title: 'Form',
        //         href: '/dashboard/form1',
        //         Icon: <TextIcon className="mr-2 h-5 w-5" />
        //     }
        // ]
    },




]