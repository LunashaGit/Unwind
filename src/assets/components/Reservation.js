import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const PostDeploy = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
             <h2>Lieu</h2>
             <p>152, Avenue Saint-Lambert 1000 Bruxelles, Belgique</p>
             <select>
                 <option>Consultation 40.00€</option>
             </select>
             <select>
                 <option>1 participant(Max. 6)</option>
                 <option>2 participant(Max. 6)</option>
                 <option>3 participant(Max. 6)</option>
                 <option>4 participant(Max. 6)</option>
                 <option>5 participant(Max. 6)</option>
                 <option>6 participant(Max. 6)</option>
            </select>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
        </div>
    );
};

export default PostDeploy;
