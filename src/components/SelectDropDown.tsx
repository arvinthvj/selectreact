import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";

export const SelectDropDown = ({data}: any) => {
  /* const [state, setState] = useState([]); */
  const [selected, setSelected] = useState([]);

/*   useEffect(() => {
    const dataFetch = async () => {
      const fetcheddata = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=0&size=10`
      );
      setState(fetcheddata.data.data);
    };
    dataFetch();
  }, []);

  console.log("out", state); */

  const aquaticCreatures = data.map((e: any) => ({
    label: e.name,
    value: e._id
  }));

  const handleChange = (selectedOption: any) => {
    console.log(selectedOption);
    setSelected(selectedOption);
  };
  console.log("sel", selected);
  //console.log(aquaticCreatures);

  const passingFn = (selected:string[]) => {

  } 

  return (
    <div  style={{color: "red", width:"25%"}}>
      <Select
        isMulti
        
        options={aquaticCreatures}
        //value={selectedOption}
        onChange={handleChange}
      />
      <div>
        {selected.map((e: any) => (
          <p>{e.label}</p>
        ))}
      </div>
    </div>
    // <div>{selected.map(e)=>(<p>{e.label}</p>))}</div>
  );
};
