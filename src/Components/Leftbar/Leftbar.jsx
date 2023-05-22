import './Leftbar.css'
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import TagIcon from '@mui/icons-material/Tag';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import Groups2Icon from '@mui/icons-material/Groups2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Leftbar() {
  return (
    <div className='leftbarContainer'>
      <div className='leftbarListContainer'>
        <ul className='leftbarList'>
          <li className='leftbarListItems'>
            <HomeIcon className='leftbarListItemsBadges'/>
            <span className='leftbarCarry'>Home</span>
          </li>
          <li className='leftbarListItems'>
            <TagIcon className='leftbarListItemsBadges'/>
            <span className='leftbarCarry'>Trending</span>
          </li>
          <li className='leftbarListItems'>
            <ChatBubbleIcon className='leftbarListItemsBadges'/>
            <span className='leftbarCarry'>Chats</span>

          </li>
          <li className='leftbarListItems'>
            <VideoLibraryIcon className='leftbarListItemsBadges'/>
            <span className='leftbarCarry'>Tikreels</span>

          </li>
          <li className='leftbarListItems'>
            <EventIcon className='leftbarListItemsBadges'/>
            <span className='leftbarCarry'>Events</span>

          </li>
          <li className='leftbarListItems'>
            <Groups2Icon className='leftbarListItemsBadges'/>
            <span className='leftbarCarry'>Groups</span>

          </li>
          <li className='leftbarListItems'>
            <BookmarksIcon className='leftbarListItemsBadges'/>
            <span className='leftbarCarry'>Bookmarks</span>

          </li>
          <li className='leftbarListItems'>
            <MoreHorizIcon className='leftbarListItemsBadges'/>
            <span className='leftbarCarry'>More</span>

          </li>
        </ul>
      </div>
    </div>
  )
}
