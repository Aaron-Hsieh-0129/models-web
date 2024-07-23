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
    "../CSSWM/Barotropic/180/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/AtbRhFcyLSg?si=LeHER1fPnGJlOefp",
    "../CSSWM/Barotropic/90/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/BgVruDFHn9I?si=TT21IBelURycO1Uv",
    "../CSSWM/Barotropic/45/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/zSepHC5psAc?si=LopnoJTbn2na77Tl",

    "../CSSWM/Gravity Wave/180/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/L5gILvCDyEs?si=8gkAwepgbwGjUGUr",
    "../CSSWM/Gravity Wave/90/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/0UTwE8glkJ4?si=xYNztzwv1twoEAFk",
    "../CSSWM/Gravity Wave/45/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/iRXGERScxMY?si=7h_JBb4SAK8jpYj4",

    "../CSSWM/Cosine Ball/45/0/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/69U_2NUdaQM?si=x9Cq2R8nUk-BE3Hc",
    "../CSSWM/Cosine Ball/45/pi:2/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/E0WU9Oy3Vog?si=haFtBD-ykW-nuc3Q",
    "../CSSWM/Cosine Ball/45/pi:4/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/2S782ahCZL0?si=0Ex26CbJfkSyuMA6",

    "../CSSWM/Cosine Ball/90/0/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/JNM0tm7DGmk?si=k0flJvNAul70zjeC",
    "../CSSWM/Cosine Ball/90/pi:2/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/ilVhmg96aUk?si=f6vfhMuLuMsOJAed",
    "../CSSWM/Cosine Ball/90/pi:4/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/5Gu_z_GR79I?si=C-xXUyawFsVmogKq",

    "../CSSWM/Cosine Ball/180/0/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/SMjYm10Pz2w?si=Vq00M1zAY3JBzhJl",
    "../CSSWM/Cosine Ball/180/pi:2/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/Tdr3qSY0ImI?si=p5Oin-CHkajfhFO4",
    "../CSSWM/Cosine Ball/180/pi:4/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/P7gq98irjXY?si=86zLs_sd4sBBB89N",

    "../CSSWM/Rossby-Hauwrwitz wave/180/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/dxrctHIMGGY?si=X_EuO40pR1wxmk08",
    "../CSSWM/Rossby-Hauwrwitz wave/90/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/Y3y00anPWQs?si=L5im2OXm-3_Yu77B",
    "../CSSWM/Rossby-Hauwrwitz wave/45/sphere_cartopy/h+wind.mov": "https://www.youtube.com/embed/CRdPHsxJojw?si=E7D-g2nmLixebLkd",

    "../CSSWM/Mountain/180/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/UJqbyWRl1wg?si=KgJXO8uUQUv4irjB",
    "../CSSWM/Mountain/90/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/M_0YS9lqTRI?si=8HglNQzip9_XW0LO",
    "../CSSWM/Mountain/45/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/G4hVWNGEAEc?si=TuHxLaTYmQq_q3_m",

    "../CSSWM/Geostrophic/180/pi:4/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/9UjxU1YosU4?si=hXExHO4YALmLCo71",
    "../CSSWM/Geostrophic/90/pi:4/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/49n2OhQ6-Ls?si=RJo6yBt1-xj7OHBK",
    "../CSSWM/Geostrophic/45/pi:4/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/CUv1pX163pQ?si=0RtyKSLCAqxkcRol",

    // TODO: Construct geostrophic videos for 0, pi/2
    "../CSSWM/Geostrophic/180/0/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/9UjxU1YosU4?si=hXExHO4YALmLCo71",
    "../CSSWM/Geostrophic/90/0/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/49n2OhQ6-Ls?si=RJo6yBt1-xj7OHBK",
    "../CSSWM/Geostrophic/45/0/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/CUv1pX163pQ?si=0RtyKSLCAqxkcRol",

    "../CSSWM/Geostrophic/180/pi:2/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/9UjxU1YosU4?si=hXExHO4YALmLCo71",
    "../CSSWM/Geostrophic/90/pi:2/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/49n2OhQ6-Ls?si=RJo6yBt1-xj7OHBK",
    "../CSSWM/Geostrophic/45/pi:2/sphere_cartopy/zeta.mov": "https://www.youtube.com/embed/CUv1pX163pQ?si=0RtyKSLCAqxkcRol",

    "../CSSWM/grid/longitudeOnCube.png": "longitudeOnCube.png",
    "../CSSWM/grid/latitudeOnCube.png": "latitudeOnCube.png",
    "../CSSWM/grid/xOnCube.png": "xOnCube.png",
    "../CSSWM/grid/yOnCube.png": "yOnCube.png"
}

const CsswmVideo = ({chooseCase, setCase}) => {
    console.log(chooseCase)

    const [videoSrc, setVideoSrc] = useState('../CSSWM/Barotropic/180/sphere_cartopy/zeta.mov');
    const [videoSrcWithAlpha, setVideoSrcWithAlpha] = useState('../CSSWM/Cosine Ball/180/0/sphere_cartopy/h+wind.mov');

    const [img1Src, set1ImgSrc] = useState('../CSSWM/grid/longitudeOnCube.png');
    const [img2Src, set2ImgSrc] = useState('../CSSWM/grid/latitudeOnCube.png');
    const [coordinate, setCoordinate] = useState("lonlat");
    const handleChangeImg = (event) => {
        let newValue = event.target.value;
        setCoordinate(newValue);
        set1ImgSrc((cur) => {
            if (newValue === "lonlat") {
                let tmp = cur.split('/');
                tmp[3] = "longitudeOnCube.png";
                return tmp.join('/');
            }
            if (newValue === "xy") {
                let tmp = cur.split('/');
                tmp[3] = "xOnCube.png";
                return tmp.join('/');
            }
        })
        set2ImgSrc((cur) => {
            if (newValue === "lonlat") {
                let tmp = cur.split('/');
                tmp[3] = "latitudeOnCube.png";
                return tmp.join('/');
            }
            if (newValue === "xy") {
                let tmp = cur.split('/');
                tmp[3] = "yOnCube.png";
                return tmp.join('/');
            }
        })
    }


    // const [chooseCase, setCase] = useState('Barotropic');
    const handleChangeCase = (event, newValue) => {
        setCase(newValue);
        let tmp = "";
        if (newValue === "Barotropic" || newValue === "Mountain" || newValue === "Geostrophic" ) {
            tmp = {target: {value: "zeta"}}
        } 
        else {
            tmp = {target: {value: "h+wind"}}
        }
        console.log(newValue)
        handleChangeVar(tmp) // to avoid error because there is no zeta in other case
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

    const [resolution, setResolution] = useState('180');
    const handleChangeRes = (event) => {
        let newValue = event.target.value;
        setResolution(newValue);
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[3] = newValue;
            return tmp.join('/');
        });
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[3] = newValue;
            return out.join('/')
        });
    };

    const [projection, setProjection] = useState('sphere_cartopy');
    const handleChangeProjection = (event) => {
        let newValue = event.target.value;
        setProjection(newValue);
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[4] = newValue;
            return tmp.join('/');
        });
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[5] = newValue;
            return out.join('/')
        });
        
    };

    const [alpha, setAlpha] = useState('0');
    const handleChangeAlpha = (event) => {
        let newValue = event.target.value;
        setAlpha(newValue);
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[4] = newValue;
            return out.join('/')
        });
    };

    const [variable, setVariable] = useState('zeta');
    const handleChangeVar = (event) => {
        let newValue = event.target.value;
        setVariable(newValue);
        setVideoSrc((cur) => {
            let tmp = cur.split('/');
            tmp[5] = newValue + ".mov";
            return tmp.join('/');
        });
        setVideoSrcWithAlpha(() => {
            let out = videoSrcWithAlpha.split('/');
            out[6] = newValue + ".mov";
            return out.join('/')
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
                src={dict[src]}
            />
        )
    }

    const ImageCard = (src, src2) => {
        console.log(src)
        return (
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <CardMedia
                    component="img"
                    style={{width: "50%"}}
                    // autoPlay 
                    // controls 
                    src={dict[src]}
                />
                <CardMedia
                    component="img"
                    style={{width: "50%"}}
                    // autoPlay 
                    // controls 
                    src={dict[src2]}
                />
            </div>
        )
    }

    const controlResProp = (item) => ({
        checked: resolution === item,
        onChange: handleChangeRes,
        value: item,
    });
    const resolutionRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Resolution</p>
                    <div style={{display: "flex", marginLeft: "2%"}}>
                        <FormControlLabel value="180" control={<Radio {...controlResProp('180')}/>} label="6 x 180 x 180" />
                        <FormControlLabel value="90" control={<Radio {...controlResProp('90')}/>} label="6 x 90 x 90" />
                        <FormControlLabel value="45" control={<Radio {...controlResProp('45')}/>} label="6 x 45 x 45" />
                    </div>
                </RadioGroup>
            </FormControl>
        )
    };

    const controlProjProp = (item) => ({
        checked: projection === item,
        onChange: handleChangeProjection,
        value: item,
    });
    const projRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Projection</p>
                    <div style={{display: "flex", marginLeft: "2.3%"}}>
                        <FormControlLabel value="sphere_cartopy" control={<Radio {...controlProjProp('sphere_cartopy')}/>} label="sphere" />
                    </div>
                    {/* TODO: Establish curvilinear view */}
                    {/* <FormControlLabel value="curvilinear" control={<Radio {...controlProjProp('curvilinear')}/>} label="curvilinear" /> */}
                </RadioGroup>
            </FormControl>
        )
    };

    const controlImgProp = (item) => ({
        checked: coordinate === item,
        onChange: handleChangeImg,
        value: item,
    });
    const imgRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>Coordinate</p>
                    <div style={{display: "flex", marginLeft: "2%"}}>
                        <FormControlLabel value="lonlat" control={<Radio {...controlImgProp('lonlat')}/>} label="lon/lat" />
                        <FormControlLabel value="xy" control={<Radio {...controlImgProp('xy')}/>} label="x/y" />
                    </div>
                </RadioGroup>
            </FormControl>
        )
    };

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
                    <div style={{display: "flex", marginLeft: "3.2%"}}>
                        <FormControlLabel value="zeta" control={<Radio {...controlVarProp('zeta')}/>} label="ζ + h + wind" />
                    </div>
                    {/* <FormControlLabel value="h+wind" control={<Radio {...controlVarProp('h+wind')}/>} label="h + wind" /> */}
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
                    
                    <p>Variable</p>
                    <div style={{display: "flex", marginLeft: "3.2%"}}>
                        <FormControlLabel value="h+wind" control={<Radio {...controlVarProp('h+wind')}/>} label="h + wind" />
                    </div>
                </RadioGroup>
            </FormControl>
        )
    };

    const controlAlphaProp = (item) => ({
        checked: alpha === item,
        onChange: handleChangeAlpha,
        value: item,
    });
    const alphaRadio = () => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{display: "flex", justifyContent: "flex-start"}}
                >
                    
                    <p>α (direction)</p>
                    <div style={{display: "flex", marginLeft: "1.2%"}}>
                        <FormControlLabel value="0" control={<Radio {...controlAlphaProp('0')}/>} label="0" />
                        <FormControlLabel value="pi:2" control={<Radio {...controlAlphaProp('pi:2')}/>} label="pi/2" />
                        <FormControlLabel value="pi:4" control={<Radio {...controlAlphaProp('pi:4')}/>} label="pi/4" />
                    </div>
                </RadioGroup>
            </FormControl>
        )
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={chooseCase} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList variant="scrollable" scrollButtons="auto" onChange={handleChangeCase}>
                        <Tab style={{textTransform: "none"}} label="Grid" value="Grid" />
                        <Tab style={{textTransform: "none"}} label="Barotropic" value="Barotropic" />
                        <Tab style={{textTransform: "none"}} label="Gravity Wave" value="Gravity Wave" />
                        <Tab style={{textTransform: "none"}} label="Cosine Ball" value="Cosine Ball" />
                        <Tab style={{textTransform: "none"}} label="Rossby-Hauwrwitz Wave" value="Rossby-Hauwrwitz wave" />
                        <Tab style={{textTransform: "none"}} label="Mountain" value="Mountain" />
                        <Tab style={{textTransform: "none"}} label="Geostrophic" value="Geostrophic" />
                    </TabList>


                    <div style={{display: "flex", flexDirection: "column", marginLeft: "2%"}}>
                        {
                            chooseCase === "Grid"
                            ? <></>
                            : resolutionRadio()
                        }
                        {
                            chooseCase === "Grid"
                            ? imgRadio()
                            : projRadio()
                        }
                        {
                            chooseCase !== "Grid"
                            ?
                                chooseCase === "Barotropic" || chooseCase === "Mountain" || chooseCase === "Geostrophic" 
                                ? varRadio()
                                : var2Radio()
                            :
                                <></>
                        }
                        {
                            chooseCase === "Cosine Ball" || chooseCase === "Geostrophic"
                            ? alphaRadio()
                            : <></>
                        }
                    </div>
                    {
                        chooseCase !== "Grid" 
                        ?
                            chooseCase === "Cosine Ball" || chooseCase === "Geostrophic"
                            ? VideoCard(videoSrcWithAlpha)
                            : VideoCard(videoSrc)
                        :
                            ImageCard(img1Src, img2Src)
                    }
                </Box>

                
            </TabContext>
        </Box>
    )
}

export default CsswmVideo;