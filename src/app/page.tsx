'use client';

import { Divide } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

import Header from '@/components/header/Header';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function HomePage() {
  return (
    <main className='w-full h-full'>
      <Head>
        <title>login templates</title>
      </Head>
      <section className='w-full h-full bg-gray-800'>
        <div className='absolute w-full h-full'>
          <Image
            className='absolute right-0'
            width={856}
            height={807}
            src='https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/login-page-templates/Artwork.png'
            alt='Banner'
          />
        </div>

        <Header />

        <div className='relative flex w-full flex-col items-start text-center'>
          <div className='mt-44 ml-52 flex flex-col items-center justify-start'>
            <h1 className='text-5xl font-bold mb-6 text-white'>
              Login Templates for Developers
            </h1>
            <p className='text-xl max-w-2xl mb-12 text-white'>
              简化您的开发流程，使用我们精美的登录页模板，专注于构建核心功能。
            </p>

            <ButtonLink href='#' className='btn-primary mt-6'>
              开始使用
            </ButtonLink>
          </div>
        </div>
        <div className='flex flex-row items-center mt-32 ml-24'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-white'>高效开发</h2>
            <span className='text-white'>
              使用现成的登录页模板，快速启动您的项目
            </span>
          </div>
          <Divide className='w-[1px] h-12 bg-gray-300 ml-12 mr-12' />
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-white'>美观设计</h2>
            <span className='text-white'>
              每个模板都经过精心设计，确保视觉效果和用户体验
            </span>
          </div>
          <Divide className='w-[1px] h-12 bg-gray-300 ml-12 mr-12' />
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-white'>开源社区</h2>
            <span className='text-white'>
              加入我们的社区，分享和获取更多优秀的登录页模板
            </span>
          </div>
        </div>
        <footer className='absolute bottom-2 text-gray-700 w-full flex justify-center'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
            Theodorus Clarence
          </UnderlineLink>
        </footer>
      </section>
    </main>
  );
}
