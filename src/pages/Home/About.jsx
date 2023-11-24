
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


const About = () => {
   
    

    const workInfo = [
        {
            title: 'Register',
            time: 'TIMING: 7:00 PM',
            description: "Create your account to begin your journey in finding a life partner. Registration is simple and secure.",
            image:'https://i.ibb.co/QMmGW4r/rings.png',
            icon: RepeatIcon
        },
        {
            title: 'Find your Match',
            time: 'TIMING: 7:00 PM',
            description: "Discover potential matches based on your preferences and criteria. Find someone who shares your values and interests.",
            image:'https://i.ibb.co/sCnkdcW/wedding-couple.png',
            icon: RepeatIcon
        },
        {
            title: 'Send Interest',
            time: 'TIMING: 7:00 PM',
            description: "Express your interest in someone you're attracted to. Show that you're interested in getting to know them better.",
            image:'https://i.ibb.co/BzFDDBP/love-birds.png',
            icon: RepeatIcon
        },
        {
            title: 'Get Profile Information',
            time: 'TIMING: 7:00 PM',
            description: "Access detailed profile information of potential matches. Get insights into their personality, lifestyle, and more.",
            image:'https://i.ibb.co/B3nXfdL/network.png',
            icon: RepeatIcon
        },
        {
            title: 'Start Meetups',
            time: 'TIMING: 7:00 PM',
            description: "Initiate meetups to get to know each other better. Arrange meetings to build a deeper connection and understanding.",
            image:'https://i.ibb.co/R6FfQhL/chat.png',
            icon: RepeatIcon
        },
        {
            title: 'Getting Marriage',
            time: 'TIMING: 7:00 PM',
            description: "Embark on the beautiful journey of marriage with your perfect match. Take the next step towards a lifelong commitment.",
            image:'https://i.ibb.co/cDhDfcC/wedding-2.png',
            icon: RepeatIcon
        },
    ];
    

    return(
        <>
            <SectionTitle title='How it works'/>
            <Timeline position="alternate">
                {workInfo.map((item, index) => (
                    <TimelineItem key={index} >
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            <img src={item.image} alt="" style={{width:'80px'}}/>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                            {item.icon && <item.icon />}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {item.title}
                            </Typography>
                        
                            <Typography>{item.description}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </>
    )}
export default About;