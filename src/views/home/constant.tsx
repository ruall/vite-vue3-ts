import { Tooltip, Tag } from 'ant-design-vue'
import type { ColumnProps } from 'ant-design-vue/es/table/interface'

export const columns: ColumnProps[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 80,
  },
  {
    title: '创建日期',
    dataIndex: 'created_at',
    slots: { customRender: 'toDateTime' },
    width: 150,
  },
  {
    title: '更新日期',
    dataIndex: 'updated_at',
    slots: { customRender: 'toDateTime' },
    width: 170,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: '描述',
    dataIndex: 'description',
    // width: 180,
    ellipsis: true,
    customRender: ({ text }) => (
      <Tooltip placement='topLeft' title={text}>
        {text}
      </Tooltip>
    ),
  },
  {
    title: '颜色',
    dataIndex: 'color',
    width: 100,
    customRender: ({ text }) => <Tag color={text}>{text}</Tag>,
    fixed: 'right',
  },
]

export const button = {
  type: 'button',
  label: '新增',
}

export const items = [
  {
    label: '选择框：',
    placeholder: '请选择',
    name: 'btn1',
    type: 'select',
    options: [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) })),
  },
  {
    label: '选择框：',
    placeholder: '请选择',
    name: 'btn1',
    type: 'search',
    options: [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) })),
  },
]

export const model = [
  {
    btn1: 'a1',
  },
]

export const actions = [
  {
    title: '按钮1',
    width: 100,
    key: 'action1',
    label: 'button1',
    popConfirm: true,
    onConfirm: () => {},
    onCancel: () => {},
    fixed: 'right',
    type: 'primary',
  },
]
