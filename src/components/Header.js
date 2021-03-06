import React from "react";
import { Link } from "react-router-dom";

function Header(){
    const nav =[
        {ID: 1, label: "Mobile Phones"},
        {ID: 2, label: "Cars"},
        {ID: 3, label: "Motorcycles"},
        {ID: 4, label: "houses"},
        {ID: 5, label: "TV-Video - Audio"},
        {ID: 6, label: "Tablets"},
        {ID: 7, label: "Land & Plots"}
];
    return(
        <React.Fragment>
        <div className="header fixed flex aic">
            <div className="logo">
            <img src={require("../Ui/OLX_New_Logo.png")}/>
            </div>
            <div className="location rel flex aic">
                <div className="icon-search ico"/>
               <input className="label s15 font" placeholder="Your Location" value="Pakistan"/>
               <button className="icon-cheveron-down arro s24" />
            </div>
            <div className="search flex aic">

                <input type="text" placeholder="Find Cars, Mobile Phone and More...." className="query font s15"/>
                <button className="icon-search go s24 cfff"/>
            </div>
            <div className="actions flex aic">
                <Link to="/account-signin" className="color fontb s16 noulh noul">Sign In </Link>
            <button className="sell flex color aic">
                <div className="icon-plus ico s16"/>
                <h2 className="s18 fontb">sell</h2>
            </button>
            </div>

        </div>
        <div className="hnav fixed flex aic">
          <button className="view-cates flex aic color">
          <h2 className="s16 font color">All Categories</h2>
          <button className="icon-cheveron-down arro s24" /> 

          </button>
          {
              nav.map(item =>{
                  return(
                  <Link to={"/browser/"+ item.ID}className="noul noulh color bl font s15">{item.label}</Link>
                  )
              })
          }
            </div>

        <div className="hclr"/> 
        </React.Fragment>
    )
}

export default Header;