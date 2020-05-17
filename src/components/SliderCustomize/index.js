/*eslint-disable no-undef*/

import React, { Component } from "react";
import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { URL_PROPERTIES_LOGO, URL_PROPERTIES } from 'services';
import {Modal} from 'antd';
import './style.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{ position: "absolute", right: "-25px", top: "10%" }}
      onClick={onClick}>
      <MdChevronRight />
    </div>
  );
}
const settingsFull = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{ position: "absolute", left: "-25px", top: "10%" }}
      onClick={onClick}>
      <MdChevronLeft />
    </div>

  );
}
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      fullScreen:false
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  toggleFullScreen = ()=>{
    this.setState({fullScreen:!this.state.fullScreen})
  }
  render() {
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    const settings2 = {
      responsive: [
        {
          breakpoint: 922,
          settings: {
            dots: true,
            fade: true,
          }
        }
      ]
    };
    return (
      <div className="slideShow">
        {this.state.fullScreen &&<Modal
        footer={false}
        wrapClassName={"wrapClassName"}
        visible={this.state.fullScreen}
        onOk={this.toggleFullScreen}
        onCancel={this.toggleFullScreen}
        width={"45%"}
        maskClosable={false}
        closable={false}
        style={{background:"transparent"}}
      >
    <Slider {...settingsFull}>
    {this.props.galleries.map((gallery, index) => {
            return (
              <div key={index}>
               <img src={URL_PROPERTIES + gallery.image} alt="" className="styleslideShow" style={{ width: "100%", objectFit:"contain" }} />
              </div>
            )
          })}
        </Slider>
        <div onClick={()=>this.toggleFullScreen()} className="close-icon">X</div>
      </Modal>}
        <Slider
        className="cu-slider"
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...settings2}
        >
          {this.props.galleries.map((gallery, index) => {
            return (
              <div key={index} onClick={()=>this.toggleFullScreen()}>
               <img src={URL_PROPERTIES +"small_"+ gallery.image} alt="" className="styleForImage" />
              </div>
            )
          })}
        </Slider>
        <div style={{ margin: "0 25px" }} className="d-lg-block d-none">
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={this.props.galleries.length>=3?3:this.props.galleries.length}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settings}
          >
              {this.props.galleries.map((gallery, index)=>{
                return(
                  <div>
                    <img src={URL_PROPERTIES +"small_"+ gallery.image} alt="" className="img-fluid rounded d-block image-small-slider" style={{ height: "50px", width:"90%"}} />

                  </div>
                )
              })}
          
          </Slider>
        </div>


      </div>
    );
  }
}