import { useState } from "react";
import { CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const dict = {
  "../2DVVM/Advection/u/qc+qr+th+u+w.mov":
    "https://www.youtube.com/embed/Vi9EUY5r9vM?si=35pBzObnGxkzUqfB",
  "../2DVVM/Dry/qc+qr+th+u+w.mov":
    "https://www.youtube.com/embed/_kMCv7yszBk?si=YNfVaNYpqSmkO9s7",
  "../2DVVM/Dry/zeta.mov":
    "https://www.youtube.com/embed/m0XSXb3JNDQ?si=MXeIO2oMfeS3hacm",


  "../2DVVM/Water/qc+qr+th+u+w.mov":
    "https://www.youtube.com/embed/VwtlIBtG95A",
  // "../2DVVM/Water/zeta.mov":
  //   "https://www.youtube.com/embed/zTbMVUMof40?si=Cj9pI1HiqaaNJDyb",

  "../2DVVM/Shear/qc+qr+th+u+w.mov":
    "https://www.youtube.com/embed/rtyHQa--FCo?si=ftHgSs6vAIGMVtkd",
  "../2DVVM/Shear/zeta.mov":
    "https://www.youtube.com/embed/f2icjrLrAi4?si=h5yCPC_BKirZUEFw",

  "../2DVVM/6Q16Q2/qc+qr+th+u+w.mov":
    "https://www.youtube.com/embed/rdzmJJ8HzHc",
};

const VVMVideo = ({ chooseCase, setCase }) => {
  console.log(chooseCase);

  const [videoSrc, setVideoSrc] = useState("../2DVVM/Dry/qc+qr+th+u+w.mov");
  const [videoSrcWithAlpha, setVideoSrcWithAlpha] = useState(
    "../2DVVM/Advection/u/qc+qr+th+u+w.mov",
  );

  // const [chooseCase, setCase] = useState('Barotropic');
  const handleChangeCase = (event, newValue) => {
    setCase(newValue);
    let tmp = { target: { value: "qc+qr+th+u+w" } };
    handleChangeVar(tmp); // to avoid error because there is no zeta in other case
    setVideoSrc((cur) => {
      let tmp = cur.split("/");
      tmp[2] = newValue;
      return tmp.join("/");
    });
    setVideoSrcWithAlpha((cur) => {
      let tmp = cur.split("/");
      tmp[2] = newValue;
      return tmp.join("/");
    });
  };

  const [variable, setVariable] = useState("qc+qr+th+u+w");
  const handleChangeVar = (event) => {
    let newValue = event.target.value;
    setVariable(newValue);
    setVideoSrc((cur) => {
      let tmp = cur.split("/");
      tmp[3] = newValue + ".mov";
      return tmp.join("/");
    });
    setVideoSrcWithAlpha(() => {
      let out = videoSrcWithAlpha.split("/");
      out[4] = newValue + ".mov";
      return out.join("/");
    });
  };

  const [advection, setAdvection] = useState("u");
  const handleChangeAdvection = (event) => {
    let newValue = event.target.value;
    setAdvection(newValue);
    setVideoSrcWithAlpha(() => {
      let out = videoSrcWithAlpha.split("/");
      out[3] = newValue;
      return out.join("/");
    });
  };

  const VideoCard = (src) => {
    console.log(src);
    console.log(dict[src]);
    return (
      <CardMedia
        component="iframe"
        style={{ height: "700px", width: "100%" }}
        autoPlay
        controls
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={dict[src]}
      />
    );
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
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <p>Variable</p>
          <div style={{ display: "flex", marginLeft: "2%" }}>
            <FormControlLabel
              value="qc+qr+th+u+w"
              control={<Radio {...controlVarProp("qc+qr+th+u+w")} />}
              label="qc + qr + θ + u + w"
            />
            <FormControlLabel
              value="zeta"
              control={<Radio {...controlVarProp("zeta")} />}
              label="ζ"
            />
          </div>
        </RadioGroup>
      </FormControl>
    );
  };
  const var2Radio = () => {
    return (
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <p>Variable</p>
          <div style={{ display: "flex", marginLeft: "2%" }}>
            <FormControlLabel
              value="qc+qr+th+u+w"
              control={<Radio {...controlVarProp("qc+qr+th+u+w")} />}
              label="θ + wind"
            />
          </div>
        </RadioGroup>
      </FormControl>
    );
  };
  const varQ1Q2Radio = () => {
    return (
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <p>Variable</p>
          <div style={{ display: "flex", marginLeft: "2%" }}>
            <FormControlLabel
              value="qc+qr+th+u+w"
              control={<Radio {...controlVarProp("qc+qr+th+u+w")} />}
              label="qc + qr + θ + u + w"
            />
          </div>
        </RadioGroup>
      </FormControl>
    );
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
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <p>Direction</p>
          <div style={{ display: "flex", marginLeft: "1.6%" }}>
            <FormControlLabel
              value="u"
              control={<Radio {...controlAdvectionProp("u")} />}
              label="u"
            />
          </div>
          {/* TODO: Fix the video*/}
          {/* <FormControlLabel value="w" control={<Radio {...controlAdvectionProp('w')}/>} label="w" /> */}
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={chooseCase}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChangeCase}
          >
            <Tab
              style={{ textTransform: "none" }}
              label="Advection"
              value="Advection"
            />
            <Tab
              style={{ textTransform: "none" }}
              label="Dry Warm Bubble"
              value="Dry"
            />
            <Tab
              style={{ textTransform: "none" }}
              label="Physics + Warm Bubble"
              value="Water"
            />
            <Tab
              style={{ textTransform: "none" }}
              label="Physics + Warm Bubble + Shear"
              value="Shear"
            />
            <Tab
              style={{ textTransform: "none" }}
              label="Large Scale Forcing (6Q1,6Q2)"
              value="6Q16Q2"
            />
          </TabList>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2%",
            }}
          >
            {chooseCase === "Advection" ? advectionRadio() : <></>}

            {
              chooseCase === "Advection" || chooseCase === "Dry"
              ? var2Radio()
                : chooseCase === "6Q16Q2" || chooseCase === "Water"
                ? varQ1Q2Radio()
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
  );
};

export default VVMVideo;
