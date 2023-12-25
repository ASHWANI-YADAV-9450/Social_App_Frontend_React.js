import { Card, Grid } from '@mui/material'
import React from 'react'
import Login from './Login'
import Register from './Register'

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className='h-screen overflow-hidden' item xs={7}>
            {/* <img className='h-full w-full' src="https://www.adobe.com/express/learn/blog/media_19a6320255f0ee0bf15d2e9937607b9fa757a20cc.jpeg?width=1200&format=pjpg&optimize=medium" alt="" /> */}
            <img className='h-full w-full'  src="https://alumni.blogg.lu.se/files/2020/11/natverk1-1000x563.png" alt="" />
        </Grid>
        <Grid item xs={5}>

        <div className='px-20 flex flex-col justify-center h-full'>

        <Card className='card p-8'>
          <div className='flex flex-col items-cente mb-5 space-y-1'>
            <h1 className='logo text-center'>Social App</h1>
            <p className='text-center text-sm w-[70&]'>Connecting Lives, Sharing Stories: Your Social World, Your Way</p>
          </div>

          {/* <Login /> */}
          <Register />
        </Card>

        </div>
        </Grid>
        </Grid>
    </div>
  )
}

export default Authentication