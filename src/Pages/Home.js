import './Home.css'
import Topbar from '../Components/Topbar/Topbar'
import Leftbar from '../Components/Leftbar/Leftbar'
import Feed from '../Components/Feed/Feed'
import Rightbar from '../Components/Rightbar/Rightbar'

export default function Home() {
  return (
    <div className='homeContainer'>
      <Topbar/>
      <div className='homeContanierBody'>
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}
