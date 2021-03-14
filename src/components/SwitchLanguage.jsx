import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { teal, grey, red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useTranslation } from "react-i18next";


const TealSwitch = withStyles({        
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: teal[500],
    },
    '&$checked + $track': {
      backgroundColor: teal[200],
    },
  },
  checked: {},
  track: {},  
})(Switch);


export default function SwitchLanguage(props) {
  const { navbarDark } = props;

  const [t, i18n] = useTranslation("global");
  const [language, setlanguage] = useState(false);
  
  const changeLanguage = () => {    
    if(language == false){
      i18n.changeLanguage("es");
      setlanguage(true);
    }
    if(language == true){
      i18n.changeLanguage("en")
      setlanguage(false);
    }
  };

  return (
    <div style={{marginRight: 0}}>
    <FormGroup>
      <FormControlLabel
        control={<TealSwitch onChange={changeLanguage} />}
        label={language ? "Español" : "Spanish"}
        labelPlacement="start"       
        style={{color: navbarDark ? "#8cd7d0" : "#868686"}}
        color="red"
      />
    </FormGroup>
    </div>
  );
}
