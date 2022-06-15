import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import './AllRecordsList.css';
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const AllRecordsList = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      // width: '30%',
      ...getColumnSearchProps('firstName'),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      // width: '20%',
      ...getColumnSearchProps('lastName'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'User Type',
      dataIndex: 'availableAs',
      key: 'availableAs',
      ...getColumnSearchProps('availableAs'),
    },
    {
      title: 'Availability Status',
      dataIndex: 'availableStatus',
      key: 'availableStatus',
      ...getColumnSearchProps('availableStatus'),
    },
    {
      title: "Pick up point details",
      children: [
        {
          title: 'House number',
          dataIndex: 'pickupHouseNumber',
          key: 'pickupHouseNumber',
          ...getColumnSearchProps('pickupHouseNumber'),
        },
        {
          title: 'Street/Lane',
          dataIndex: 'pickupStreet',
          key: 'pickupStreet',
          ...getColumnSearchProps('pickupStreet'),
        },
        {
          title: 'Sector',
          dataIndex: 'pickupSector',
          key: 'pickupSector',
          ...getColumnSearchProps('pickupSector'),
        },
        {
          title: 'Phase',
          dataIndex: 'pickupPhase',
          key: 'pickupPhase',
          ...getColumnSearchProps('pickupPhase'),
        },
        {
          title: 'City',
          dataIndex: 'pickupCity',
          key: 'pickupCity',
          ...getColumnSearchProps('pickupCity'),
        }
      ]  
    },
    {
      title: "Drop off point details",
      children: [
        {
          title: 'House number',
          dataIndex: 'dropoffHouseNumber',
          key: 'dropoffHouseNumber',
          ...getColumnSearchProps('dropoffHouseNumber'),
        },
        {
          title: 'Street/Lane',
          dataIndex: 'dropoffStreet',
          key: 'dropoffStreet',
          ...getColumnSearchProps('dropoffStreet'),
        },
        {
          title: 'Sector',
          dataIndex: 'pickupSector',
          key: 'dropoffSector',
          ...getColumnSearchProps('dropoffSector'),
        },
        {
          title: 'Phase',
          dataIndex: 'dropoffPhase',
          key: 'dropoffPhase',
          ...getColumnSearchProps('dropoffPhase'),
        },
        {
          title: 'City',
          dataIndex: 'dropoffCity',
          key: 'dropoffCity',
          ...getColumnSearchProps('dropoffCity'),
        }
      ]  
    },
  ];
  return <Table className='myTable' scroll bordered columns={columns} dataSource={props.data} />;
};

export default AllRecordsList;