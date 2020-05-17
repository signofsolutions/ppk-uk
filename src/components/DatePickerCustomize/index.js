import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import './style.scss';

const InitialDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const format = "YYYY/MM/DD";
const weeks = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
function Index({onChange, handleClick, checkDates}) {
    const [days, setDays] = useState(InitialDays);
    const [date, setDate] = useState(moment().format(format))
    const [dateRanger, setDateRanger] = useState(checkDates?checkDates:[])
    const [selectRange, setSelectRange] = useState([]);
    const [startDate, setStartDate] = useState(false)     
    const addDyasToFirst = (dayWeek) => {
        const  monthLength = moment(date).daysInMonth();
        switch (dayWeek) {
            case 0:
                return setDays([0, 0, 0, 0, 0, 0].concat(InitialDays.slice(0, monthLength)));
            case 1:
                return setDays(InitialDays);
            case 2:
                return setDays([0].concat(InitialDays));
            case 3:
                return setDays([0, 0].concat(InitialDays));
            case 4:
                return setDays([0, 0, 0].concat(InitialDays));
            case 5:
                return setDays([0, 0, 0, 0].concat(InitialDays));
            case 6:
                return setDays([0, 0, 0, 0, 0].concat(InitialDays));
            default:
                break;
        }
    }
    const nextMonth = () => {
        setDate(moment(date).add(1, "month").format(format));                
    }
    const prevMonth = () => {
        if(moment(date).format('YYYY/MM')>moment().format('YYYY/MM')){
            setDate(moment(date).subtract(1, "month").format(format)); 

        }
    }
    const changeDayRange = (selectProps) => {
        const selectedDay = parseInt(moment(date).set('date', selectProps).format('YYYYMMDD'))
        let newArr = [...selectRange];
        if(newArr.length % 2 === 0){
            if(Math.max(...newArr)>= selectedDay ){
                newArr = [selectedDay];
                setDateRanger([]);
                setStartDate(selectedDay)
            }else{                
                newArr.push(selectedDay)
                setStartDate(selectedDay)
            }                      
        }else if(Math.max(...newArr)> selectedDay ){
            newArr = [selectedDay];
            setDateRanger([])
            setStartDate(selectedDay)
        }else{
            newArr.push(selectedDay)
        } 
        if(newArr.length % 2 === 0){
            let to = newArr.length / 2;
            let arrTo = Array(to).fill(0);
            let bbb = []
            if(to>0){
                bbb = arrTo.map((x, index) => {return(
                        {check_in:newArr[(index*2)], check_out:newArr[(index*2)+1]}
                    )})
                
            }
            setDateRanger(bbb)
        }
        setSelectRange(newArr) 
        handleClick(newArr)   
           
    }

    
    const checkSelectDate = (x) => {
        let result = dateRanger.map(el => {
            if(el.check_in === x){
                return 'START';
            }else if(el.check_out === x){
                return 'END'
            }else if(el.check_out > x && x > el.check_in){
                return 'SELECT'
            }else{
                return 'NULL'
            }
        })
        if(x === startDate){
            return 'days-selected-start';
        }else if(result.indexOf('START')>-1){
            return 'days-selected-start';
        }else if(result.indexOf('END')>-1){
            return 'days-selected-end';
        }else if(result.indexOf('SELECT')>-1){
            return 'days-selected-select';
        }else{
            return false;
        }
        
        
    }
    useEffect(()=>{
        addDyasToFirst(moment(date).startOf('month').day())
    },[date])
    useEffect(()=>{
        onChange(dateRanger)
    },[dateRanger])
    return (
        <div style={{ width: "100%", padding:"10px"}}>
            <div style={{display:"flex", flexDirection:"row", lineHeight:"30px", justifyContent:"center", alignItems:"center"}}>
                <div style={{display:"flex",cursor:"pointer",  flex:1}} onClick={()=>prevMonth()}><MdKeyboardArrowLeft style={{color:"#484848", fontSize:"26px"}}/></div>
                <div style={{display:"flex", fontSize:"small", fontWeight:"bold", justifyContent:"center", flex:2, color:"#484848"}}>{moment(date).format('MMMM YYYY')}</div>
                <div style={{display:"flex",cursor:"pointer", justifyContent:"flex-end", flex:1}} onClick={()=>nextMonth()}><MdKeyboardArrowRight style={{color:"#484848", fontSize:"26px"}}/></div>
            </div>
            <section >
                <div className="weeks-days">
                    {weeks.map((week, index) => {
                        return (<div className="days" key={index} style={{color:"#777777"}}>{week}</div>)
                    })}
                </div>
                <div className="weeks-days">
                    {days.map((day, index) => {
                        if(day === 0 || moment(date).set('date',day).format('MM') > moment(date).format('MM') ){
                            return (<div className="days" key={index} ></div>)
                        }else if(moment(date).set({date:day, hour:24})>=moment().set({hour:0})){
                            return (<div key={index}  className={`days ${checkSelectDate(parseInt(moment(date).set('date', day).format('YYYYMMDD')))}`} onClick={()=>changeDayRange(day) }>{day}</div>)
                        }else{
                            return (<div key={index}  className={`days-none-selected`}>{day}</div>)
                        }
                    })}
                </div>
            </section>
        </div>
    )
}

export default Index;


