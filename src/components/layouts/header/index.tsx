'use client';

import { FC } from 'react';
import { SwitchCase } from '@toss/react';
import LogInHeader from './LogInHeader';
import LogOutHeader from './LogOutHeader';
import { LoginType } from '@/models';
import { Input } from '@/components/common/input';
import { FindIcon } from '@/components/common/Icon';

export const Header: FC = () => {
  const login = 'logOut';
  return (
    <header className="flex w-100 h-20 items-center justify-between shadow-header sticky px-8 z-1">
      <p className="text-[29px] font-pretendard font-black text-main">
        INSINDER
      </p>
      <div className="w-[557px] h-12 relative">
        <div className="absolute top-1/2 left-[24px] transform -translate-y-1/2">
          <FindIcon />
        </div>
        <label htmlFor="search"></label>
        <Input
          id="search"
          type="text"
          onChange={() => null}
          value={''}
          placeHolder="검색어를 입력하세요"
          style={
            'w-[557px] h-12 left-[680.25px] top-[11.25px] rounded-[32px] border-[1.5px] border-[#ff5c00] placeholder:text-neutral-600 placeholder:opacity-50 text-sm text-left placeholder:pl-[60px]'
          }
        />
      </div>
      <SwitchCase
        value={login as LoginType}
        caseBy={{
          logIn: <LogInHeader />,
          logOut: <LogOutHeader />,
        }}
      />
    </header>
  );
};
