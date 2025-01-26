import Image from 'next/image'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import Colors from '@/data/Colors'
import { UserDetailContext } from '@/context/UserDetailContext';
import Link from 'next/link';
import { LucideDownload, Rocket } from 'lucide-react';
import { useSidebar } from '../ui/sidebar';
import { usePathname } from 'next/navigation';
import { ActionContext } from '@/context/ActionContext'



function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const { action, setAction } = useContext(ActionContext);


  //const {toggleSidebar} = useSidebar();
  //const path=usePathname();
  //console.log(path?.includes('workspace'))

  const onActionBtn = (action) => {
    setAction({
      actionType: action,
      timeStamp: Date.now()
    })
  }



  return (
    <div className='p-4 flex justify-between items-center border-b'>
      <Link href={'/'}>
        <Image src={'/logos.png'} alt='Logo' width={200} height={140} />
      </Link>
      {!userDetail?.name &&
        <div className='flex gap-5'>
          <Button variant="ghost">Sign In</Button>
          <Button className="text-white" style={{
            backgroundColor: Colors.BLUE
          }}>Get Started</Button>
        </div>}
    </div>




    /*
    <div className="p-4 glex justify-between items-center border-b">
    <Link href={'/'}>
    <Image src={'/logo.png} alt="Logo" width={40} height={40}/>
    </Link>
    {!userDetail?.name ? <div className='flex gap-5'>
    <Button variant="ghost">Sing In</Button>
    <Button className="text-white" style={{
    backgroundColor:Colors.BLUE
    }}>Get Started</Button>
    
    </div> :
    path?.includes('workspace) && <div className="flex gap-2 items-center border-b">
    <Button variant="ghost" onClick={() => onActionBtn('export)}><LucideDownload/> Export</Button>
    <Button className="bg-blue-500 text-white hover:bg-blue-600"
    onClick={() => onActionBtn('deploy)}><Rocket/>Deploy</Button>
    {userDetail && <image src={userDetail?.picture} alt="user" width={40} height={40}
    className="rounded-full w-[130px]" onClick={togglerSidebar}
    />}
    
    
    </div>
    
    
    
    }
    </div>
     */




  )
}

export default Header