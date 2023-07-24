import { ConfirmDialog } from '@/shared/components/common/dialog/ConfirmDialog';
import DataTable from '@/shared/components/common/table/DataTable';
import DataTableColumnHeader from '@/shared/components/common/table/DataTableColumnHeader';
import { Button } from '@/shared/components/common/ui/button';
import { Checkbox } from '@/shared/components/common/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/components/common/ui/dialog';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shared/components/common/ui/dropdown-menu';
import { IArticle, useGetListArticle } from '@/shared/schemas/models/IArticle';
import { PAGINATION } from '@/Settings';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, ListPlus, MoreHorizontal, PlusCircle, Trash2, User } from 'lucide-react';
import React, { useEffect } from 'react'
import { IWorkLog, mockData } from '@/shared/schemas/models/IWorkLog.model';
import { useRouter } from 'next/router';

type Props = {}


export default function WorkLogTable({ }: Props) {
    const TABLE_NAME = 'WorkLog'
    // const { data, onChangeSearchParams, tableConfig, getFieldValueOnSearchParam2 } = useGetListArticle()
    const data = mockData
    const columns: ColumnDef<IWorkLog>[] = [
        {
            id: 'select',
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            id: "Tên",
            accessorKey: "name",
            cell(props) {
                return <div className='truncate w-[80px]'>{props.getValue() as string}</div>
            },
            header: ({ column }) => <DataTableColumnHeader column={column} title="Tên" />,
            // meta: {
            //     searchFn: (value: string) => {
            //         onChangeSearchParams({
            //             field: 'title',
            //             fieldType: 'STRING',
            //             op: 'LIKE',
            //             value: value
            //         })
            //     }
            // }
        },
        {
            id: "Mô tả",
            accessorKey: "description",
            cell(props) {
                return <div className='truncate w-[400px]'>{props.getValue() as string}</div>
            },
            header: ({ column }) => <DataTableColumnHeader column={column} title="Mô tả " />,
            meta: {
                searchFn: (value: string) => { console.log(value) }
            }
        },
        {
            id: "Nhân viên",
            accessorKey: "staff",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Nhân viên " />,
            meta: {
                searchFn: (value: string) => { console.log(value) }
            }
        },
        {
            id: "Dự án",
            accessorKey: "projectName",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Dự án" />,
            meta: {
                searchFn: (value: string) => { console.log(value) }
            }
        },
        {
            id: "Phase",
            accessorKey: "Phase",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Phase" />,
            meta: {
                searchFn: (value: string) => { console.log(value) }
            }
        },
        {
            id: "Task",
            accessorKey: "task",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Task" />,
            meta: {
                searchFn: (value: string) => { console.log(value) }
            }
        },
        {
            id: "Bắt đầu",
            accessorKey: "from",
            header: ({ column }) => <DataTableColumnHeader column={column} title="From" />,
            // meta: {
            //     searchFn: (value: string) => { console.log(value) }
            // }
        },
        {
            id: "Kết thúc",
            accessorKey: "to",
            header: ({ column }) => <DataTableColumnHeader column={column} title="Kết thúc" />,
            // meta: {
            //     searchFn: (value: string) => { console.log(value) }
            // }
        },
        {
            id: 'actions',
            header: "Action",
            cell: ({ row }) => {
                const record = row.original;
                return (
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer pl-4 font-medium">
                                <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>

                            <ConfirmDialog
                                triggerCpn={<Button variant={'ghost'} className='justify-start w-full' >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                </Button>}
                                title="Xóa "
                                content="Chắc chắn Xóa"
                                onOk={() => console.log('pressed')}
                            />

                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => navigator.clipboard.writeText(JSON.stringify(record, null, 2))}
                            >
                                Copy
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },

    ];
    const router = useRouter()
    return (
        <section>
            <div className='flex justify-between' >
                <div className='text-3xl font-bold'>{TABLE_NAME}</div>
                <Button onClick={() => router.push('/worklog/create')}><PlusCircle className='mr-2' /> Add Worklog</Button>
            </div >
            <DataTable
                data={data as IWorkLog[]}
                columns={columns}
                tableName={TABLE_NAME}
                // {...tableConfig}
                isLoading={false}
                pageCount={4}
                pageIndex={1}
                pageSize={10}
                handChangePagination={() => { console.log() }}
            />
        </section>
    )
}