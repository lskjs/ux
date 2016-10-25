import { Component } from 'react'
import MdEmail from 'react-icons/lib/md/email'
import MdLock from 'react-icons/lib/md/lock'
import MdAccountBox from 'react-icons/lib/md/account-box'
import MdPhoneIphone from 'react-icons/lib/md/phone-iphone'
import FaSpinner from 'react-icons/lib/fa/spinner'
import Spinner from '../Spinner'
// import Spinner from 'react-spinkit'
// http://stackoverflow.com/questions/16771225/css3-rotate-animation
export default {
  email: MdEmail,
  phone: MdPhoneIphone,
  lock: MdLock,
  profileInfo: MdAccountBox,
  loading: () => <span><Spinner><FaSpinner /></Spinner></span>,
}
