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

const VVMVideo = ({chooseCase, setCase}) => {
    console.log(chooseCase)

    const [videoSrc, setVideoSrc] = useState('../2DVVM/Dry/qc+qr+th+u+w.mov');
    const [videoSrcWithAlpha, setVideoSrcWithAlpha] = useState('../2DVVM/Advection/u/qc+qr+th+u+w.mov');

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
        setVideoSrcWithAlpha((cur) => {
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
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[4] = newValue + ".mov";
            return out.join('/')
        });
    };

    const [advection, setAdvection] = useState('u');
    const handleChangeAdvection = (event) => {
        let newValue = event.target.value;
        setAdvection(newValue);
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[3] = newValue;
            return out.join('/')
        });
    };

    const VideoCard = (src) => {
        console.log(src)
        return (
            <CardMedia
                component="video"
                style={{}}
                autoPlay 
                controls 
                src={src}
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
                    
                    <p>Variable &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                    <FormControlLabel value="qc+qr+th+u+w" control={<Radio {...controlVarProp('qc+qr+th+u+w')}/>} label="qc+qr+th+u+w" />
                    <FormControlLabel value="zeta" control={<Radio {...controlVarProp('zeta')}/>} label="zeta" />
                </RadioGroup>
            </FormControl>
        )
    };
    const var2Radio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Variable &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                    <FormControlLabel value="qc+qr+th+u+w" control={<Radio {...controlVarProp('qc+qr+th+u+w')}/>} label="qc+qr+th+u+w" />
                </RadioGroup>
            </FormControl>
        )
    };

    const controlAdvectionProp = (item) => ({
        checked: advection === item,
        onChange: handleChangeAdvection,
        value: item,
    });
    const advectionRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Variable &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
                    <FormControlLabel value="u" control={<Radio {...controlAdvectionProp('u')}/>} label="u" />
                    <FormControlLabel value="w" control={<Radio {...controlAdvectionProp('w')}/>} label="w" />
                </RadioGroup>
            </FormControl>
        )
    };


    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={chooseCase} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChangeCase}>
                        <Tab style={{textTransform: "none"}} label="Advection" value="Advection" />
                        <Tab style={{textTransform: "none"}} label="Dry Warm Bubble" value="Dry" />
                        <Tab style={{textTransform: "none"}} label="Physics + Warm Bubble" value="Water" />
                        <Tab style={{textTransform: "none"}} label="Physics + Warm Bubble + Shear" value="Shear" />
                    </TabList>


                    <div style={{display: "flex", flexDirection: "column", marginLeft: "2%"}}>
                        {
                            chooseCase === "Advection"
                            ? advectionRadio()
                            : <></>
                        }

                        {
                            chooseCase === "Advection" 
                            ? var2Radio()
                            : varRadio()
                        }
                    </div>
                    {
                        chooseCase === "Advection"
                        ? VideoCard(videoSrcWithAlpha)
                        : VideoCard(videoSrc)
                    }
                </Box>

                
            </TabContext>
        </Box>
    )
}

export default VVMVideo;