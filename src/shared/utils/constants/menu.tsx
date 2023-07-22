import { DashboardIcon } from "@radix-ui/react-icons";
import { Settings2Icon, Table2Icon, TextIcon } from "lucide-react";


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
        title: 'Dashboard',
        href: '/dashboard',
        Icon: <DashboardIcon className="mr-2 h-5 w-5" />,
        chidren: [
            {
                title: 'Table',
                href: '/dashboard/table',
                Icon: <Settings2Icon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form1',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            }
        ]
    },
    {
        title: 'Dashboard',
        href: '/dashboard2',
        Icon: <DashboardIcon className="mr-2 h-5 w-5" />,
        chidren: [
            {
                title: 'Table2',
                href: '/dashboard/tabl2e',
                Icon: <Settings2Icon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form3',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form14',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            }
        ]
    },
    {
        title: 'Dashboard',
        href: '/dashboardr',
        Icon: <DashboardIcon className="mr-2 h-5 w-5" />,
        chidren: [
            {
                title: 'Table',
                href: '/dashboard/table4',
                Icon: <Settings2Icon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form1',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            }
        ]
    },
    {
        title: 'Dashboard',
        href: '/dashboardraxcz',
        Icon: <DashboardIcon className="mr-2 h-5 w-5" />,
        chidren: [
            {
                title: 'Table',
                href: '/dashboard/table4',
                Icon: <Settings2Icon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form1',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            }
        ]
    },
    {
        title: 'Dashboard',
        href: '/dashboardrxxxx',
        Icon: <DashboardIcon className="mr-2 h-5 w-5" />,
        chidren: [
            {
                title: 'Table',
                href: '/dashboard/table4',
                Icon: <Settings2Icon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            },
            {
                title: 'Form',
                href: '/dashboard/form1',
                Icon: <TextIcon className="mr-2 h-5 w-5" />
            }
        ]
    },
    {
        title: 'External',
        href: '/google.com',
        Icon: <Table2Icon className="mr-2 h-5 w-5" />,
    },


]