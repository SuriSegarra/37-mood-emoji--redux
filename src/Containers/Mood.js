import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useSelector, useDispatch } from 'react-redux';
import { getCoffees, getSnack, getNaps, getStudy, getFace } from '../Selectors/MoodSelector';
import { drinkCoffee, eatSnack, takeNap, study } from '../Actions/MoodActions';

const Mood = () => {

  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnack);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudy);
  const face = useSelector(getFace);
  
  
  const handleSelection = action => {
    
    switch(action.type) {
      case 'DRINK_COFFEE':
        dispatch(drinkCoffee())
        break;
        case 'EAT_SNACK':
          dispatch(eatSnack())
          break;
          case 'TAKE_NAP':
            dispatch(takeNap())
            break;
            case 'STUDY':
              dispatch(study())
              break;
              default:
                console.log(`unhandled type: ${action.type}`);
              }
            }
            

    return (
      <>
        <Controls>
          <button onClick={() => handleSelection({ type: 'DRINK_COFFEE' })}>coffee - {coffees}</button>
          <button onClick={() => handleSelection({ type: 'EAT_SNACK' })}>snacks - {snacks}</button>
          <button onClick={() => handleSelection({ type: 'TAKE_NAP' })}>naps - {naps}</button>
          <button onClick={() => handleSelection({ type: 'STUDY' })}>studies - {studies}</button>
        </Controls>
        <Face emoji={face} />
      </>
    );
    
}


export default Mood;
