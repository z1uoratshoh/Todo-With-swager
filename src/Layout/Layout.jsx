import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import "../App.css"

import { useTranslation } from "react-i18next";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switcher from "../Component/Switcher";


// ! images
import icon_1 from "../img/Logo-3.png"

import icon_last from "../img/social media Link.png"

const Layout = () => {

  const [age2, setAge2] = useState('');
  const page = useNavigate()

  const handleChange2 = (event) => {
    setAge2(event.target.value);
    page(event.target.value)
  };

  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    i18n.changeLanguage(event.target.value)
  };
  const {t , i18n } = useTranslation()
  const active = localStorage.getItem("i18nextLng")



  
  return (
    <div className="min-h-screen flex flex-col">

      <header className="pt-[3%] pb-[3%] bg-[#1E1E1E]">
        
          <ul className="w-[80%] md:w-[95%] m-auto f_l text-[white]" >
            
            <li className="w-[10%]">
              <img src={icon_1} alt="" />
            </li>
            <div className="f_l w-[40%]  md:hidden">
            <li>
              <Link to="/" className="hover:underline">
                {t("navBar.text_1")}
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:underline">
              {t("navBar.text_2")}
              </Link>
            </li>
            <li>
            {t("navBar.text_4")}
            </li>
            <li>
            {t("navBar.text_5")}
            </li>
            
            </div>

            
            <li>
          <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Lahguage</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={localStorage.getItem("i18nextLng")}
          label="Lahguage"
          onChange={(event) =>handleChange(event)}
          className=" border h-[40px] bg-[white] md:h-[30px] md:w-[50px] md:text-[10px]"
        >
          <MenuItem value={"en"} >English</MenuItem>
          <MenuItem value={"ru"} >Русский</MenuItem>
          <MenuItem value={"tj"} >Точики</MenuItem>
        </Select>
      </FormControl>
          </Box>   
          </li>

          <li className="w-[10%]">
            <Switcher/>
          </li>

          <li>
            <button className="btn text-[white] md:h-[30px] md:w-[80px]">{t("navBar.btn")}</button>
          </li>

          <li className="hidden md:flex ">
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className="text-[5px]">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age2}
          label="Age"
          onChange={handleChange2}
          className="md:h-[30px] md:w-[50px] border bg-[white]"
        >
          <MenuItem value={"/"}>{t("navBar.text_1")}</MenuItem>
          <MenuItem value={"/Contact"}>{t("navBar.text_2")}</MenuItem>
          <MenuItem value={30}>{t("navBar.text_3")}</MenuItem>
        </Select>
      </FormControl>
    </Box>
          </li>
          </ul>
        
      </header>
      

      
        <Outlet />

        <footer className="bg-[#1E1E1E] pt-[2%]">
          <div className="w-[80%] m-auto f_l flex-wrap gap-10 md:text-center p-[3%] text-[white]">
            <div className="w-[350px]">
              <h1 className="text-[40px]">{t("fot.div_1.text_1")}</h1>
              <h1>{t("fot.div_1.text_2")}</h1>
              <img className="w-[70%]" src={icon_last} alt="" />
            </div>

            <div className="w-[200px] md:m-auto">
              <h1  className="text-[25px]">{t("fot.div_2.text_1")}</h1>
              <h1>{t("fot.div_2.text_2")}</h1>
              <h1>{t("fot.div_2.text_3")}</h1>
              <h1>{t("fot.div_2.text_4")}</h1>
              <h1>{t("fot.div_2.text_5")}</h1>
              <h1>{t("fot.div_2.text_6")}</h1>
            </div>
            <div className="w-[200px]  md:m-auto">
              <h1 className="text-[25px]">{t("fot.div_3.text_1")}</h1>
              <h1 >{t("fot.div_3.text_2")}</h1>
              <h1 >{t("fot.div_3.text_3")}</h1>
              <h1 >{t("fot.div_3.text_4")}</h1>
              <h1 >{t("fot.div_3.text_5")}</h1>
              <h1 >{t("fot.div_3.text_6")}</h1>
              <h1 >{t("fot.div_3.text_7")}</h1>
              <h1 >{t("fot.div_3.text_8")}</h1>
              <h1 >{t("fot.div_3.text_9")}</h1>
              <h1 >{t("fot.div_3.text_10")}</h1>
            </div>
            <div className="w-[200px]  md:m-auto">
              <h1  className="text-[25px]">{t("fot.div_2.text_1")}</h1>
              <h1>{t("fot.div_4.text_2")}</h1>
              <h1>{t("fot.div_4.text_3")}</h1>
              
            </div>
          </div>
        </footer>
      
      
    </div>
  );
};

export default Layout;
