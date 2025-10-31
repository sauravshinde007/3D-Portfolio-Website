import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa";
import { leetcode, itch } from "../assets";

const Socials = () => {
        return(
            <>
                <a href="https://www.linkedin.com/in/saurav-shinde007/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors">
                <FaLinkedin />
                </a>
                <a href="https://github.com/sauravshinde007" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <FaGithub />
                </a>
                <a href="https://leetcode.com/u/Saurav_san007/" target="_blank" rel="noopener noreferrer">
                    {/* Apply hover and transition classes to the <img> directly */}
                    <img 
                        src={leetcode} 
                        width={30} 
                        alt="LeetCode" 
                        className="hover:opacity-75 transition-opacity" 
                    />
                </a>
                <a href="https://saurav-san007.itch.io/" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={itch} 
                        width={35} 
                        alt="itch.io" 
                        className="hover:opacity-75 transition-opacity" 
                    />
                </a>
                <a href="https://open.spotify.com/user/46bstocc3d65fgbolkayhuqfr?si=c6847961e55a461a" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                    <FaSpotify />
                </a>
                <a href="https://www.youtube.com/@sauravsan" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                    <FaYoutube />
                </a>
                <a href="https://www.instagram.com/saurav_san007/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                    <FaInstagram />
                </a>                
            </>
        )
}

export default Socials;