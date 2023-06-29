import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/326523259_1875068876167124_923315921394523379_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lvPvJac69v8AX-BulN3&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDB1ux6ugapvqiCARjY7X-raTFhx6XipaAxofe0bfZx4Q&oe=64A2A37A' alt='' />
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <div className='image'>
                  <Link to='/account'>
                    <div className='img'>
                      <img src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/326523259_1875068876167124_923315921394523379_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lvPvJac69v8AX-BulN3&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDB1ux6ugapvqiCARjY7X-raTFhx6XipaAxofe0bfZx4Q&oe=64A2A37A' alt='' />
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>Minh Hung</h4>
                    <label htmlFor=''>RA-Phong Thanh Cong</label>
                  </div>
                </div>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box' onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
