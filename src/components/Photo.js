import React, {
  useState,
  useEffect
} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {StyledBody, StyledCont, StyledPhoto,StyledText,Hdiv2,Hdiv3,DateWrapper} from './Styles.js'



function Photo() {

  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [date, setDate] = useState('');
  const [newDate, setNewDate] = useState(new Date());

  let dd = newDate.getDate();
  let mm = newDate.getMonth() + 1;
  let yyyy = newDate.getFullYear();

  const onChange = newDate => setNewDate(newDate)

  useEffect(() => {
    const fetchPhoto = () =>
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=H4RkKMTzLDohZOqogAHog9Hiq7laUaxIAH3oXc1D&date=${yyyy}-${mm}-${dd}`)
      .then(photo => {
        setPhoto(photo.data.hdurl)
        setTitle(photo.data.title)
        setAbout(photo.data.explanation)
        setDate(photo.data.date)
        console.log(photo);
      });
    fetchPhoto()
  }, [dd, mm, yyyy])

  return (
    <StyledCont >
    <DateWrapper >
    < DatePicker height = '50px'
    onChange = {onChange}
    value = {newDate}
    format = 'yyyy-MM-dd'
    maxDate = {new Date()}/>
    </DateWrapper>
    <StyledBody >
      <Hdiv2 > {title} < /Hdiv2>
      <Hdiv3 > {date} < /Hdiv3>
    <StyledPhoto src = {photo} alt = "" / >
    <StyledText width = '30vw' >{about} < /StyledText>
     </StyledBody>
    </StyledCont>
  )

}

export default Photo;
