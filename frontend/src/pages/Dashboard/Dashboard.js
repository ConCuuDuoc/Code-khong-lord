import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./Dashboard.css";
import LeftBar from "../../Components/LeftBar/Leftbar"; 
import Header from "../../Components/Header/Header"; 
import rectangle from "./images/rectangle-5.svg";
import Group29 from "./images/Group 29.svg"
import Group1 from "./images/Group1.svg"
import Group28 from "./images/Group 28.svg"
import Image2 from "./images/Image 2.svg"
import Group from "./images/Group.svg"
import Document from "./images/Document.svg"
import Polygon from "./images/Polygon 1.svg"

function Dashboard ()  {    

  return (
    <div className="dashboard-profile">
      <div className="overlap-wrapper">
        <div className="overlap">
          
          <LeftBar />
          <div className='header-container'>
            <Header />
          </div>

          <div className="rectangle" />
          <img className="img" alt="Rectangle" src={rectangle}/>
   
          <div className="welcome">
            <div className="overlap-2">
              <p className="you-ve-learned-of">
                <span className="span">You’ve learned </span>
                <span className="text-wrapper-2">70% </span>
                <span className="span">
                  {" "}
                  of your goal this week!
                  <br />
                  Keep it up and improve your progress.
                </span>
              </p>
              <div className="group-2">
                <div className="text-wrapper-3">Welcome back, akwy666!</div>
              </div>
              <img className="artboard-1-1" alt="" src={Group} />
            </div>
          </div>
         
          <div className="calendar">
            <div className="month-selector">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img
                    className="vector-stroke"
                    alt="Vector stroke"
                    src="https://c.animaapp.com/nDae5x4u/img/vector-2--stroke--1.svg"
                  />
                  <div className="text-wrapper-4">JULY 2021</div>
                </div>
              </div>
              <div className="text-wrapper-5">My Progress</div>
            </div>
            <div className="calendar-events">
              <div className="weekdays-weeks">
                <div className="weekdays">
                  <div className="text-wrapper-6">Mo</div>
                  <div className="text-wrapper-7">Tu</div>
                  <div className="text-wrapper-8">We</div>
                  <div className="text-wrapper-9">Th</div>
                  <div className="text-wrapper-10">Fr</div>
                  <div className="text-wrapper-11">Sa</div>
                  <div className="text-wrapper-12">Su</div>
                </div>
                <div className="week">
                  <div className="text-wrapper-13">1</div>
                  <div className="text-wrapper-14">2</div>
                  <div className="text-wrapper-15">3</div>
                  <div className="text-wrapper-16">4</div>
                </div>
                <div className="overlap-3">
                  <div className="week-2">
                    <div className="text-wrapper-17">5</div>
                    <div className="text-wrapper-18">6</div>
                    <div className="text-wrapper-19">7</div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-20">8</div>
                    </div>
                    <div className="current-day" />
                    <div className="current-day-2" />
                    <div className="current-day-3" />
                    <div className="overlap-4">
                      <div className="text-wrapper-21">9</div>
                    </div>
                    <div className="overlap-group-3">
                      <div className="text-wrapper-22">10</div>
                    </div>
                    <div className="text-wrapper-23">11</div>
                  </div>
                  <div className="week-3">
                    <div className="text-wrapper-24">12</div>
                    <div className="text-wrapper-25">13</div>
                    <div className="text-wrapper-26">14</div>
                    <div className="text-wrapper-27">15</div>
                    <div className="text-wrapper-28">16</div>
                    <div className="text-wrapper-29">17</div>
                    <div className="text-wrapper-30">18</div>
                  </div>
                  <div className="week-4">
                    <div className="text-wrapper-24">19</div>
                    <div className="text-wrapper-31">20</div>
                    <div className="text-wrapper-32">21</div>
                    <div className="text-wrapper-33">22</div>
                    <div className="text-wrapper-34">23</div>
                    <div className="text-wrapper-35">24</div>
                    <div className="text-wrapper-36">25</div>
                  </div>
                </div>
                <div className="week-5">
                  <div className="text-wrapper-37">26</div>
                  <div className="text-wrapper-38">27</div>
                  <div className="text-wrapper-39">28</div>
                  <div className="text-wrapper-40">29</div>
                  <div className="text-wrapper-41">30</div>
                  <div className="text-wrapper-42">31</div>
                </div>
              </div>
              </div>
              </div>

          <div className="activities">
            <div className="text-wrapper-43">Upcoming Activities</div>
            <div className="text-wrapper-44">See all</div>
            <div className="social-ins">
              <div className="group-wrapper">
                <div className="group-3">
                  <div className="group-4">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-45">13</div>
                    </div>
                  </div>
                  <div className="group-5">
                    <div className="text-wrapper-46">Social Insurance Test</div>
                    <p className="p">School Hall, University Road, Lagos State</p>
                    <div className="group-6">
                      <div className="text-wrapper-47">13th July 2021</div>
                      <p className="text-wrapper-48">8 A.M - 9 A.M</p>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="adv-maths">
              <div className="group-wrapper">
                <div className="group-7">
                  <div className="group-8">
                    <div className="overlap-group-5">
                      <div className="text-wrapper-49">18</div>
                    </div>
                  </div>
                  <div className="group-9">
                    <div className="text-wrapper-46">Adv. Maths Assignment Due</div>
                    <p className="p">**To be submitted via Email</p>
                    <div className="group-10">
                      <div className="text-wrapper-47">18th July 2021</div>
                      <p className="text-wrapper-48">8 A.M - 9 A.M</p>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dr-dipo">
              <div className="overlap-5">
                <div className="group-11">
                  <div className="group-12">
                    <div className="overlap-group-6">
                      <div className="text-wrapper-50">23</div>
                    </div>
                  </div>
                  <div className="group-13">
                    <div className="text-wrapper-46">Dr. Dipo’s Tutorial Class</div>
                    <p className="text-wrapper-51">Edulog Tutorial College, Blk 56, Lagos State.</p>
                    <div className="group-14">
                      <div className="text-wrapper-47">23rd July 2021</div>
                      <p className="text-wrapper-48">10 A.M - 1 P.M</p>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="life-con">
              <div className="group-wrapper">
                <div className="group-15">
                  <div className="group-16">
                    <div className="overlap-group-7">
                      <div className="text-wrapper-52">8</div>
                    </div>
                  </div>
                  <div className="group-17">
                    <div className="text-wrapper-46">Life Contingency Tutorials</div>
                    <p className="p">Edulog Tutorial College, Blk 56, Lagos State.</p>
                    <div className="group-18">
                      <p className="text-wrapper-47">8th - 10th July 2021</p>
                      <p className="text-wrapper-53">8 A.M - 9 A.M</p>
                      <div className="ellipse-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll">
              <div className="rectangle-2" />
            </div>
          </div>

          <div className="completion-progress">
            <div className="overlap-6">
              <div className="text-wrapper-54">Completion Progress</div>
              <div className="life-cont">
                <div className="text-wrapper-55">Life Contingency</div>
                <div className="text-wrapper-56">Chapter 3</div>
                <div className="group-19">
                  <div className="overlap-group-8">
                    <div className="text-wrapper-57">75%</div>
                  </div>
                </div>
              </div>
              <div className="social-ins-2">
                <div className="text-wrapper-58">Social Insurance</div>
                <div className="text-wrapper-56">Chapter 4</div>
                <div className="group-19">
                  <div className="overlap-group-9">
                    <div className="text-wrapper-59">91%</div>
                  </div>
                </div>
              </div>
              <div className="advanced-maths">
                <div className="text-wrapper-60">Advanced Maths.</div>
                <div className="text-wrapper-61">Module 2</div>
                <div className="group-19">
                  <div className="overlap-group-10">
                    <div className="text-wrapper-62">25%</div>
                  </div>
                </div>
              </div>
              <div className="pension">
                <div className="text-wrapper-63">Pension</div>
                <div className="text-wrapper-64">Chapter 5</div>
                <div className="group-19">
                  <div className="overlap-group-11">
                    <div className="text-wrapper-59">97%</div>
                  </div>
                </div>
              </div>
              <div className="rectangle-wrapper">
                <div className="rectangle-3" />
              </div>
            </div>
          </div>
          <div className="top-performing">
            <div className="overlap-6">
              <div className="scroll-2">
                <div className="rectangle-4" />
              </div>
              <div className="text-wrapper-65">Top Performing Student</div>
              <div className="MA">
                <div className="overlap-7">
                  <div className="element-points">7/10 POINTS</div>
                  <div className="text-wrapper-66">Mayowa Ade</div>
                  <div className="group-20">
                    <div className="overlap-group-12">
                      <div className="text-wrapper-67">MA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="OT">
                <div className="overlap-8">
                  <div className="element-points-2">8.5/10 POINTS</div>
                  <div className="text-wrapper-68">Olawuyi Tobi</div>
                  <div className="group-21">
                    <div className="overlap-group-13">
                      <div className="text-wrapper-69">OT</div>
                    </div>
                  </div>
                </div>
                <img className="group-22" alt="Group" src={Group29} />
              </div>
              <div className="JA">
                <div className="overlap-8">
                  <div className="group-23">
                    <div className="overlap-group-14">
                      <div className="text-wrapper-70">JA</div>
                    </div>
                  </div>
                  <div className="text-wrapper-71">Joshua Ashiru</div>
                  <div className="element-points-3">9.6/10 POINTS</div>
                </div>
                <img className="group-24" alt="Group" src={Group1} />
              </div>
              <div className="AA">
                <div className="overlap-8">
                  <div className="text-wrapper-72">Adeola Ayo</div>
                  <div className="group-25">
                    <div className="overlap-group-15">
                      <div className="text-wrapper-73">AA</div>
                    </div>
                  </div>
                  <div className="element-points-4">9/10 POINTS</div>
                </div>
                <img className="group-26" alt="Group" src={Group28} />
              </div>
            </div>
          </div>
          <div className="performance">
            <div className="overlap-9">
              <div className="rectangle-5" />
              <div className="text-wrapper-74">Performance</div>
              <div className="group-27">
                <div className="text-wrapper-75">Overall</div>
                <img className="polygon" alt="Polygon" src={Polygon} />
              </div>
              <div className="line-chart">
                <div className="vector-wrapper">                 
                </div>
              </div>
            </div>
          </div>
          <div className="messages">
            <div className="overlap-6">
              <div className="text-wrapper-76">Messages</div>
              <div className="text-wrapper-77">View All</div>
              <div className="josh">
                <div className="overlap-10">
                  <div className="text-wrapper-78">15:30 pm</div>
                  <div className="group-28">
                    <p className="dear-ayo-you-are-yet">
                      Dear Ayo, You are yet to submit your assignment <br />
                      for chapt...
                    </p>
                    <div className="text-wrapper-79">Joshua Ashiru</div>
                  </div>
                </div>
                <div className="group-29">
                  <div className="overlap-group-16">
                    <div className="text-wrapper-80">JA</div>
                  </div>
                </div>
              </div>
              <div className="olawuyi">
                <div className="overlap-11">
                  <div className="text-wrapper-81">12:30 pm</div>
                  <div className="group-30">
                    <p className="text-wrapper-82">Can you check out the formulas in these Images att...</p>
                    <div className="group-31">
                      <div className="group-32">
                        <div className="group-33">
                          <div className="text-wrapper-83">Image .jpg</div>
                        </div>
                      </div>
                      <div className="group-34">
                        <div className="group-35">
                          <div className="text-wrapper-84">Form .jpg</div>
                        </div>
                      </div>
                      <div className="group-36">
                        <div className="group-37">
                          <img
                            className="image-2"
                            alt="Image2"
                            src = {Image2}
                            
                          />
                          <div className="text-wrapper-85">Image 2 .jpg</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-86">Olawuyi Tobi</div>
                  </div>
                </div>
                <div className="group-29">
                  <div className="overlap-group-17">
                    <div className="text-wrapper-87">OT</div>
                  </div>
                </div>
              </div>
              <div className="mayowa">
                <div className="text-wrapper-88">09:34 am</div>
                <div className="group-29">
                  <div className="overlap-group-18">
                    <div className="text-wrapper-89">MA</div>
                  </div>
                </div>
                <div className="group-38">
                  <div className="text-wrapper-90">Mayowa Ade</div>
                  <p className="text-wrapper-91">Hey! I just finished the first chapter</p>
                  <div className="group-39">
                    <div className="group-40">
                      <img
                        className="iconly-light-outline-5"
                        alt="Iconly light outline"
                        src={Document}
                      />
                      <p className="text-wrapper-92">First Chapter of Project .doc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
 
    );
};
export default Dashboard;
