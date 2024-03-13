import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

import { PrimaryCheckButtons } from '../../../components/main/common/buttons/checkbuttons/checkbuttons';

export const StudentTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [rowSelection, setRowSelection] = useState([]);

  const handleHeaderCheckboxClick = () => {
    if (!selectAll) {
      const allIds = renderedData.map((item) => item.id);
      setRowSelection(allIds);
    } else {
      setRowSelection([]);
    }
    setSelectAll(!selectAll);
  };

  const handleRowCheckboxClick = (id) => {
    const updatedSelection = [...rowSelection];
    if (updatedSelection.includes(id)) {
      updatedSelection.splice(updatedSelection.indexOf(id), 1);
    } else {
      updatedSelection.push(id);
    }
    setRowSelection(updatedSelection);
  };


  const columns = [
    {
      title: (
        <PrimaryCheckButtons
          checked={selectAll}
          onChange={handleHeaderCheckboxClick}
        />
      ),
      dataIndex: 'checkbox',
      key: '',
    },
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Link to="/studentdetails"> {text}</Link>,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Center',
      dataIndex: 'center',
      key: 'center',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      id: 1,
      center: 'New York No. 1 Lake Park',
      role: 'student',
      attendance: ['present'],
    },
    {
      key: '2',
      name: 'james white',
      id: 2,
      center: 'New York No. 1 Lake Park',
      role: 'student',
      attendance: ['present'],
    },
    // ... other data items ...
  ];
  
  const renderedData = data.map((item) => ({
    ...item,
    checkbox: (
      <PrimaryCheckButtons
        checked={rowSelection.includes(item.id)}
        onChange={() => handleRowCheckboxClick(item.id)}
      />
    ),
  }));

  
  return (
    <div>
      {' '}
      <Table columns={columns} dataSource={renderedData} />;
    </div>
  );
};

export const TeacherTable = () => {
  const columns = [
    {
      title: <PrimaryCheckButtons />,
      dataIndex: 'checkbox',
      key: '',
    },
    {
      title: 'Teacher Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Link to="/studentdetails"> {text}</Link>,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Center',
      dataIndex: 'center',
      key: 'center',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Login Time',
      dataIndex: 'login time',
      key: 'login time',
    },
    {
      title: 'Log Out Time',
      dataIndex: 'log out time',
      key: 'log out time',
    },
    {
      title: 'Working Hour',
      dataIndex: 'log out time',
      key: 'log out time',
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
    },
  ];

  const data = [
    {
      checkbox: <PrimaryCheckButtons />,
      key: '1',
      name: 'John Brown',
      id: 32,
      center: 'New York No. 1 Lake Park',
      role: 'teacher',
      attendance: ['present'],
    },
  ];

  return (
    <div>
      {' '}
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};
