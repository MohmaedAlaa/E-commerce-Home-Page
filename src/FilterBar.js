import React,{useState} from 'react';
import { MultiSelect } from "react-multi-select-component";


function FilterBar () {

     const objectArray = [
          { key: "S" },
          { key: "M"},
          { key: "XL"},
          { key: "XXL"},
          { key: "Option 5", cat: "Group 2" },
          { key: "Option 6", cat: "Group 2" },
          { key: "Option 7", cat: "Group 2" }
        ]
    // const [color,setColor]=useState('');
    // const handleSelectColor=(e)=>{
    //     console.log(e);
    //     setColor(`${e} \t`);
    // }
    const [selectedSize, setselectedSize] = useState([]);
    const optionsOfSize = [
        { label: "S  " , value: "s"},
        { label: "M  " , value: "m"},
        { label: "XL ", value: "xl"},
        { label: "XXL", value: "xxl"},
        { label: "37 ", value: "37"},
        { label: "38 ", value: "38"},
        { label: "39 ", value: "39"},
        { label: "40 ", value: "40"},
        { label: "41 ", value: "41"},
        { label: "42 ", value: "42"},
        { label: "43 ", value: "43"},
        { label: "44 ", value: "45"},
        { label: "46" , value: "46"},
      ];
    const [selectedBrand, setselectedBrand] = useState([]);
    const optionsOfBrand = [
        { label: "NAE Vegan Shoes" , value: "nae vegan shoes"},
        { label: "Saint Basics   " , value: "saint basics"},
        { label: "ALETIK         ", value: "aletik"},
      ];
    const [selectedcolor, setselectedcolor] = useState([]);
    const optionsOfcolor = [
        { label: "Red   " , value: "red"},
        { label: "Yellow" , value: "yellow"},
        { label: "White ", value: "white"},
        { label: "Green " , value: "green"},
        { label: "Orange", value: "orange"},
        { label: "Blue", value: "blue"},
        { label: "Violet", value: "violet"},
      ];
    return (
        <div>
            <p>{selectedBrand.length == 1?` `.concat(((JSON.stringify(selectedBrand)).toString()).slice(11,26)):''}
            {selectedBrand.length == 1?<br></br>:''}
            {selectedcolor.length == 1?` `.concat(((JSON.stringify(selectedcolor)).toString()).slice(11,17)):''}
            {' '}
            Women’s Clothing
            {selectedSize.length == 1?' Size is '.concat(((JSON.stringify(selectedSize)).toString()).slice(11,14)):''}
            </p>
            {/*
            <DropdownButton
                title="colour"
                id="dropdown-menu-align-right"
                onSelect={handleSelectColor}
            >
                <Dropdown.Item eventKey="Red">Red</Dropdown.Item>
                <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="White">White</Dropdown.Item>
                <Dropdown.Item eventKey="Green">Green</Dropdown.Item>
                <Dropdown.Item eventKey="Yellow">White</Dropdown.Item>
                <Dropdown.Item eventKey="Orange">Orange</Dropdown.Item>
                <Dropdown.Item eventKey="Violet">Violet</Dropdown.Item>
             </DropdownButton>*/}
             <section id='filter'>
                <MultiSelect
                    options={optionsOfSize}
                    value={selectedSize}
                    onChange={setselectedSize}
                    labelledBy="Select"
                />
                <MultiSelect
                    options={optionsOfBrand}
                    value={selectedBrand}
                    onChange={setselectedBrand}
                    labelledBy="Select"
                />
                <MultiSelect
                    options={optionsOfcolor}
                    value={selectedcolor}
                    onChange={setselectedcolor}
                    labelledBy="Select"
                />
             </section>
        </div>
        
      )
}
export default FilterBar


