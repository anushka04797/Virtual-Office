import React,{useState} from 'react'
import Jitsi from 'react-jitsi'
import LinearProgress from '@material-ui/core/LinearProgress';

const Meetings=()=>{
    const [displayName, setDisplayName] = useState('')
    const [roomName, setRoomName] = useState('')
    const [password, setPassword] = useState('1234')
    const [onCall, setOnCall] = useState(false)
    const [jitsi,setJitsi]=useState()
    function hide_loading_and_show_jitsi_iframe(api){
      setJitsi(api)
      jitsi.on('readyToClose', () => {
        console.log("call close ****************************************")		
      })
      console.log('Good Morning everyone!')
      document.getElementById('react-jitsi-container').childNodes[0].style.display="none"
      document.getElementById('react-jitsi-container').childNodes[1].style.display="block"
    }
    return(
        <>
        {onCall
    ? (
      <Jitsi
        roomName={roomName}
        displayName={displayName}
        // password={password}
        //loadingComponent={LinearProgress}
        onAPILoad={JitsiMeetAPI =>hide_loading_and_show_jitsi_iframe(JitsiMeetAPI)}
      />)
    : (
      <>
        <h1>Crate a Meeting</h1>
        <input type='text' placeholder='Room name' value={roomName} onChange={e => setRoomName(e.target.value)} />
        <input type='text' placeholder='Your name' value={displayName} onChange={e => setDisplayName(e.target.value)} />
        <button onClick={() => setOnCall(true)}> Let&apos;s start!</button>
      </>
    )}
        </>
    )
}

export default Meetings