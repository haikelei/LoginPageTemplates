import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import React from 'react';

import Logo from '~/svg/Logo.svg';

const homeItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        模板展示
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        功能介绍
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        用户反馈
      </a>
    ),
  },
];

const comtributionItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        贡献流程
      </a>
    ),
  },
];

const aboutUsItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        团队介绍
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.aliyun.com'
      >
        项目背景
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        联系方式
      </a>
    ),
  },
];

const Header: React.FC = () => {
  return (
    <div className='relative flex flex-row items-center py-8 pl-16 pr-16'>
      <div className='left flex flex-row'>
        <Logo className='w-8' />
        <span className='text-white text-2xl ml-2'>LoginTemplates</span>
      </div>
      <div className='flex flex-row justify-center flex-1 gap-16 text-white'>
        <Dropdown menu={{ items: homeItems }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              首页
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <a onClick={(e) => e.preventDefault()}>快速开始</a>
        <Dropdown menu={{ items: comtributionItems }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              贡献
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items: aboutUsItems }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              关于我们
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
