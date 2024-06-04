
import { useTranslation } from "react-i18next"
import "../../App.css"


import image_1  from "../../img/Images/Hero Information.png"

import image_2 from "../../img/Images/Iamge overview & info card.png"

import image_4 from "../../img/Images/Iamge overview & info card-2.png"
import image_5 from "../../img/Images/Iamge overview & info card-3.png"

import icon_l from "../../img/Star.png"

import image_10 from "../../img/Images/Mask group-3.png"

import icon_1 from "../../img/Profil.png"

import Aos from "aos"

import icon__1 from "../../img/Icon-15.png"
import icon__2 from "../../img/Icon-16.png"
import icon__3 from "../../img/Icon-17.png"
import icon__4 from "../../img/Icon-18.png"

const Home = () => {

  const {t , i18n } = useTranslation()
  const active = localStorage.getItem("i18nextLng")

  return (
    <div className="dark:bg-[#0e152a]">
      
      <section>
        <div className="div_Home_1 text-[white] w-[100%]">
          <div className="f_l w-[80%] m-auto h-[400px]">
            <div className="w-[40%]">
              <h1 className="text-[60px] lg:text-[60px] md:text-[30px]">{t("home.sec_1.text_1")}</h1>
            </div>
            <div className="w-[40%] h-[200px] grid">
            <h1 className="text-[20px] lg:text-[17px] md:text-[10px] sm:text-[13px]">{t("home.sec_1.text_2")}</h1>
            <button className="btn md:w-[120px]">{t("home.sec_1.btn")}</button>
            </div>
          </div>

          <div data-aos="fade-right"  className="w-[80%] m-auto pt-[3%] pb-[19%]">
            <img  className="w-[100%]" src={image_1} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5F2] mt-[5%] dark:bg-[#1c2950] dark:text-[white]">
        <div className="w-[80%] m-auto f_l md:flex-wrap">
          <div className="w-[45%] md:w-[400px] md:m-auto">
            <img className="w-[100%]" src={image_2} alt="" />
          </div>
          <div className="w-[40%] md:w-[90%] md:m-auto md:text-center  h-[400px] md:h-[500px] grid">
            <h1 className="text-[50px] lg:text-[30px]">{t("home.sec_2.text_1")}</h1>
            <h1 className="lg:text-[15px]">{t("home.sec_2.text_2")}</h1>
            <button className="btn bg-[#2241CF] md:m-auto lg:w-[130px]">{t("home.sec_2.btn")}</button>
            <h1 >{t("home.sec_2.text_3")}</h1>
            <div className="f_l w-[50%] md:w-[80%] md:m-auto">
              <img src={icon_1} alt="" />
              <div>
                <h1 className="text-[20px] lg:text-[15px]">{t("home.sec_2.text_4")}</h1>
                <h1 className="text-[20px] lg:text-[10px]"> {t("home.sec_2.text_5")}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="w-[80%] m-auto mt-[3%] f_l md:flex-wrap md:w-[90%] dark:text-[white]">
          <div className="w-[400px] md:w-[100%] md:text-center h-[350px] grid">
            <h1 className="text-[40px]">{t("home.sec_3.text_1")}</h1>
            <h1>{t("home.sec_3.text_2")}</h1>
            <button className="btn bg-[#2241CF] md:m-auto">{t("home.sec_3.btn")}</button>
          </div>
          <div className="bg-[#F9F5F2] f_l dark:bg-[#1c2950] md:w-[100%] md:flex-wrap text-[black] flex-wrap  gap-5 w-[45%] p-[1%] rounded-[15px] "> 
          <div className="w-[280px] sm:m-auto md:w-[200px] h-[200px] text-center rounded-[15px] grid bg-[white]">
            <img src={icon__1} className="m-auto" alt="" />
            <h1 className="text-[23px]">{t("home.sec_3.div_1.text_1")}</h1>
            <h1>{t("home.sec_3.div_1.text_2")}</h1>
          </div>
          <div className="w-[280px] sm:m-auto  md:w-[200px] h-[200px] text-center rounded-[15px] grid bg-[white]">
            <img src={icon__2} className="m-auto" alt="" />
            <h1 className="text-[23px]">{t("home.sec_3.div_1.text_1")}</h1>
            <h1>{t("home.sec_3.div_1.text_2")}</h1>
          </div>
          <div className="w-[280px] sm:m-auto  md:w-[200px] h-[200px] text-center rounded-[15px] grid bg-[white]">
            <img src={icon__3} className="m-auto" alt="" />
            <h1 className="text-[23px]">{t("home.sec_3.div_1.text_1")}</h1>
            <h1>{t("home.sec_3.div_1.text_2")}</h1>
          </div>
          <div className="w-[280px] sm:m-auto  md:w-[200px] h-[200px] text-center rounded-[15px] grid bg-[white]">
            <img src={icon__4} className="m-auto" alt="" />
            <h1 className="text-[23px]">{t("home.sec_3.div_1.text_1")}</h1>
            <h1>{t("home.sec_3.div_1.text_2")}</h1>
          </div>
          
          </div>
        </div>
      </section>


      <section className="bg-[#F9F5F2] mt-[5%] dark:bg-[#1c2950] dark:text-[white]">
        <div className="w-[80%] m-auto f_l md:flex-wrap">
          <div className="w-[45%] md:w-[400px] md:m-auto">
            <img className="w-[100%]" src={image_4} alt="" />
          </div>
          <div className="w-[40%] md:w-[90%] md:m-auto md:text-center  h-[400px] md:h-[500px] grid">
            <h1 className="text-[50px] lg:text-[30px]">{t("home.sec_2.text_1")}</h1>
            <h1 className="lg:text-[15px]">{t("home.sec_2.text_2")}</h1>
            <div className="f_l">
            <button className="btn bg-[#2241CF] md:m-auto lg:w-[130px]">{t("sec_4.btn")}</button>
            <button className="btn bg-[#FF3C78] md:m-auto lg:w-[130px]">{t("sec_4.btn2")}</button>
            </div>
            <h1 >{t("home.sec_2.text_3")}</h1>
            <div className="f_l w-[50%] md:w-[80%] md:m-auto">
              <div>
                <h1 className="text-[20px] lg:text-[15px]">{t("home.sec_2.text_4")}</h1>
                <h1 className="text-[20px] lg:text-[10px]"> {t("home.sec_2.text_5")}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5F2] mt-[5%] dark:bg-[#1c2950] dark:text-[white]">
        <div className="w-[80%] m-auto f_l md:flex-wrap">
          
          <div className="w-[40%] md:w-[90%] md:m-auto md:text-center  h-[400px] md:h-[500px] grid">
            <h1 className="text-[50px] lg:text-[30px]">{t("home.sec_2.text_1")}</h1>
            <h1 className="lg:text-[15px]">{t("home.sec_2.text_2")}</h1>
            <div className="f_l">
            <button className="btn bg-[#2241CF] md:m-auto lg:w-[130px]">{t("sec_5.btn")}</button>
            
            </div>
          </div>

          <div className="w-[45%] md:w-[400px] md:m-auto">
            <img className="w-[100%]" src={image_5} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5F2] mt-[5%]">
        <h1 className="text-[50px] text-center ">{t("sec_7.text_1")}</h1>
        <div className="w-[80%] m-auto">

<div className="h-[450px] w-[400px] m-auto">
<swiper-container slides-per-view="1">
  <swiper-slide>
  <div className="w-[350px] bg-[white] p-[5%] rounded-[15px] h-[400px] grid">

<div className="f_l w-[90%] md:w-[80%] md:m-auto">
            <img src={icon_1} alt="" />
            <div>
              <h1 className="text-[20px] lg:text-[15px]">{t("home.sec_2.text_4")}</h1>
              <h1 className="text-[20px] lg:text-[10px]"> {t("home.sec_2.text_5")}</h1>
            </div>
          </div>

          <h1>{t("sec_7.text_2")}</h1>
          <img src={icon_l} alt="" />
</div>
  </swiper-slide>
  <swiper-slide>
  <div className="w-[350px] bg-[white] p-[5%] rounded-[15px] h-[400px] grid">

<div className="f_l w-[90%] md:w-[80%] md:m-auto">
            <img src={icon_1} alt="" />
            <div>
              <h1 className="text-[20px] lg:text-[15px]">{t("home.sec_2.text_4")}</h1>
              <h1 className="text-[20px] lg:text-[10px]"> {t("home.sec_2.text_5")}</h1>
            </div>
          </div>

          <h1>{t("sec_7.text_2")}</h1>
          <img src={icon_l} alt="" />
</div>
  </swiper-slide>
  <swiper-slide>
  <div className="w-[350px] bg-[white] p-[5%] rounded-[15px] h-[400px] grid">

<div className="f_l w-[90%] md:w-[80%] md:m-auto">
            <img src={icon_1} alt="" />
            <div>
              <h1 className="text-[20px] lg:text-[15px]">{t("home.sec_2.text_4")}</h1>
              <h1 className="text-[20px] lg:text-[10px]"> {t("home.sec_2.text_5")}</h1>
            </div>
          </div>

          <h1>{t("sec_7.text_2")}</h1>
          <img src={icon_l} alt="" />
</div>
  </swiper-slide>
  <swiper-slide>
  <div className="w-[350px] bg-[white] p-[5%] rounded-[15px] h-[400px] grid">

<div className="f_l w-[90%] md:w-[80%] md:m-auto">
            <img src={icon_1} alt="" />
            <div>
              <h1 className="text-[20px] lg:text-[15px]">{t("home.sec_2.text_4")}</h1>
              <h1 className="text-[20px] lg:text-[10px]"> {t("home.sec_2.text_5")}</h1>
            </div>
          </div>

          <h1>{t("sec_7.text_2")}</h1>
          <img src={icon_l} alt="" />
</div>
  </swiper-slide>
</swiper-container>
</div>
          

        </div>
      </section>

      <section className="mt-[5%] mb-[5%]">
        <div className="w-[80%] m-auto pt-[3%] text-[white] md:flex-wrap f_l rounded-[15px] bg-[#1E1E1E] p-[2%]">
          <div className="w-[45%] md:w-[90%]">
          <h1 className="text-[40px] lg:text-[30px] md:text-[18px]">{t("sec_5.text_1")}</h1>
          <h1 className="md:text-[8px]">{t("sec_5.text_2")}</h1>
          </div>

          <div className="w-[45%] h-[150px] md:w-[450px] grid mt-[5%]">
            <input type="text" className="bg-[#1E1E1E] border w-[100%] h-[40px] rounded-[15px] p-[2%]" placeholder="Your name" />
            <input type="text" className="bg-[#1E1E1E] border w-[100%] h-[40px] rounded-[15px] p-[2%]" placeholder="Your Email" />
            <button className="btn">{t("sec_6.btn")}</button>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home