import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
        <ArrowBackIcon/>
        Home
        </div>
        <video className="video" autoPlay progress controls src="https://mityurl.com/y/TEDT/r"></video>
    </div>
  )
}
