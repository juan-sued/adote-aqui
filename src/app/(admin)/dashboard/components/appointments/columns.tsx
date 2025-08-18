'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Copy, MoreHorizontal } from 'lucide-react'

import { format } from 'date-fns'

export type Tags = {
  id: string
  lot: string
  createdAt: Date
  status: 'pendente' | 'processando' | 'entregue' | 'cancelado'
  name: string
  amount: number
  purpose: string
  barcode: string
}
// {format(createdAtValue, 'dd/MM/yyyy')}
export const columns: ColumnDef<Tags>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
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
    id: 'LOTE',
    accessorKey: 'lot',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-muted-foreground gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          LOTE
          <ArrowUpDown size={14} />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="uppercase font-semibold opacity-80">
        {row.getValue('LOTE')}
      </div>
    ),
  },

  {
    id: 'Criado em',

    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-muted-foreground gap-2 whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Criado em
          <ArrowUpDown size={14} />
        </Button>
      )
    },

    filterFn: 'dateRange',

    cell: ({ row }) => {
      const createdAtValue = row.getValue('Criado em') as Date

      return (
        <div className="uppercase font-semibold opacity-80">
          {format(createdAtValue, 'dd/MM/yyyy')}
        </div>
      )
    },
  },
  {
    id: 'Finalidade',

    accessorKey: 'purpose',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-muted-foreground gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Finalidade
          <ArrowUpDown size={14} />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="uppercase font-semibold opacity-80">
        {row.getValue('Finalidade')}
      </div>
    ),
  },

  {
    id: 'Nome',
    enableHiding: false,
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-muted-foreground gap-2 whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nome
          <ArrowUpDown size={14} />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="uppercase font-semibold opacity-80">
        {row.getValue('Nome')}
      </div>
    ),
  },
  {
    id: 'Código',
    accessorKey: 'barcode',

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-muted-foreground gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Código
          <ArrowUpDown size={14} />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="uppercase font-semibold opacity-80">
        {row.getValue('Código')}
      </div>
    ),
  },
  {
    id: 'Quantidade',

    accessorKey: 'amount',
    header: () => <div className="text-center">Quantidade</div>,
    cell: ({ row }) => (
      <div className="uppercase font-semibold opacity-80 ">
        {row.getValue('Quantidade')}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-muted-foreground gap-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown size={14} />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="uppercase font-semibold opacity-80">
        {row.getValue('status')}
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const tag = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-muted-foreground"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(tag.barcode)}
              className="gap-2 "
            >
              <Copy size={14} />
              Copiar código de barras
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver pedido</DropdownMenuItem>
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
