import { useState } from "react";
import { CardMedia } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const dict = {
    "../2DQCM/Dry/qc+qr+th+u+w.mov": "https://www.youtube.com/embed/Wu-skqBpk1U?si=GEzT_-KgxRm4W0q6",
    "../2DQCM/Water/qc+qr+th+u+w.mov": "https://www.youtube.com/embed/3NeV51XtfBM?si=i_pEuro2cL5hTBcS",
    "../2DQCM/Shear/qc+qr+th+u+w.mov": "https://www.youtube.com/embed/RBvMHXqu_JM?si=n1XxcGJZ8k6bHU70",
}

const QCMVideo = ({chooseCase, setCase}) => {
    console.log(chooseCase)

    const [videoSrc, setVideoSrc] = useState('../2DQCM/Dry/qc+qr+th+u+w.mov');

    // const [chooseCase, setCase] = useState('Barotropic');
    const handleChangeCase = (event, newValue) => {
        setCase(newValue);
        let tmp = {target: {value: "qc+qr+th+u+w"}}
        handleChangeVar(tmp); // to avoid error because there is no zeta in other case
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[2] = newValue;
            return tmp.join('/');
        });
    };


    const [variable, setVariable] = useState('qc+qr+th+u+w');
    const handleChangeVar = (event) => {
        let newValue = event.target.value;
        setVariable(newValue);
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[3] = newValue + ".mov";
            return tmp.join('/');
        });
    };

    const VideoCard = (src) => {
        console.log(src)
        console.log(dict[src])
        return (
            <CardMedia
                component="iframe"
                style={{height: "700px"}}
                autoPlay 
                controls 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={dict[src]}
            />
        )
    }

    const controlVarProp = (item) => ({
        checked: variable === item,
        onChange: handleChangeVar,
        value: item,
    });
    const varRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Variable</p>
                    <div style={{display: "flex", marginLeft: "2%"}}>
                        <FormControlLabel value="qc+qr+th+u+w" control={<Radio {...controlVarProp('qc+qr+th+u+w')}/>} label="qc + qr + θ' + u + w" />
                    </div>
                </RadioGroup>
            </FormControl>
        )
    }
    const var2Radio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Variable</p>
                    <div style={{display: "flex", marginLeft: "2%"}}>
                        <FormControlLabel value="qc+qr+th+u+w" control={<Radio {...controlVarProp('qc+qr+th+u+w')}/>} label="θ' + wind" />
                    </div>
                </RadioGroup>
            </FormControl>
        )
    };


    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={chooseCase} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChangeCase}>
                        <Tab style={{textTransform: "none"}} label="Dry Warm Bubble" value="Dry" />
                        <Tab style={{textTransform: "none"}} label="Physics + Warm Bubble" value="Water" />
                        <Tab style={{textTransform: "none"}} label="Physics + Warm Bubble + Shear" value="Shear" />
                    </TabList>


                    <div style={{display: "flex", flexDirection: "column", marginLeft: "2%"}}>
                        {
                            chooseCase === "Dry"
                            ? var2Radio()
                            : varRadio()
                        }
                    </div>
                    {
                        VideoCard(videoSrc)
                    }
                </Box>

                
            </TabContext>
        </Box>
    )
}

export default QCMVideo;