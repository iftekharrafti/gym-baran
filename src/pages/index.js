import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar/Navbar'
import Banner from '@/Components/Banner/Banner'
import Healthy from '@/Components/Healthy/Healthy'
import DaysCard from '@/Components/DaysCard/DaysCard'
import Workout from '@/Components/Workout/Workout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gym Baran</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className='container mx-auto'>
        <Navbar />
        <Banner />
        <Healthy />
        <DaysCard />
        <Workout />
      </main>
    </>
  )
}
