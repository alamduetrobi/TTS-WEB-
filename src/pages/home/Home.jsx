import React from 'react'
import "./home.scss"
import {Sidebar}  from "../../components/sidebar/Sidebar.jsx"
import {Navbar}  from "../../components/navbar/Navbar.jsx"
import {Widget} from "../../components/widget/Widget.jsx"
import { Featured } from "../../components/featured/Featured.jsx"
import {Chart} from "../../components/chart/Chart.jsx"
import {List} from "../../components/table/Table.jsx"

export const Home = () => {
  return (
    <div className='home'>

        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Transctions
            </div>
            <List/>
          </div>
        </div>
    </div>
  )
}
